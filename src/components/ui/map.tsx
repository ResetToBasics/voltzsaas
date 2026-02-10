'use client';

import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DottedMap from 'dotted-map';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  labelClassName?: string;
  animationDuration?: number;
  loop?: boolean;
  containerClassName?: string;
  mapDotColor?: string;
  mapBackgroundColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = '#0ea5e9',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showLabels = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  labelClassName = 'text-sm',
  animationDuration = 2,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loop = true,
  containerClassName = 'w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans overflow-hidden',
  mapDotColor,
  mapBackgroundColor,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredPoint, setHoveredPoint] = useState<{ label: string; x: number; y: number } | null>(
    null,
  );
  const { resolvedTheme } = useTheme();

  const map = useMemo(() => new DottedMap({ height: 100, grid: 'diagonal' }), []);

  const svgMap = useMemo(() => {
    const color = mapDotColor ?? (resolvedTheme === 'dark' ? '#FFFF7F40' : '#00000040');
    const backgroundColor = mapBackgroundColor ?? (resolvedTheme === 'dark' ? 'black' : 'white');

    return map.getSVG({
      radius: 0.22,
      color,
      shape: 'circle',
      backgroundColor,
    });
  }, [map, mapBackgroundColor, mapDotColor, resolvedTheme]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <div className={containerClassName}>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-contain"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
        priority
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-auto select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`points-group-${i}`}>
              {/* Connection Line */}
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={`url(#path-gradient)`}
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />

              {/* Animated Flow Dot */}
              <motion.circle r="1.5" fill={lineColor} filter="url(#glow)">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path={createCurvedPath(startPoint, endPoint)}
                  begin={`${i * 0.5}s`}
                />
              </motion.circle>

              {/* Start Point */}
              <g key={`start-${i}`}>
                <motion.g className="cursor-pointer" whileHover={{ scale: 1.1 }}>
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="2.5"
                    fill={lineColor}
                    filter="url(#glow)"
                  />
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="2.5"
                    fill={lineColor}
                    opacity="0.4"
                  >
                    <animate
                      attributeName="r"
                      from="2.5"
                      to="8"
                      dur="3s"
                      begin={`${(i % 4) * 0.5}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.4"
                      to="0"
                      dur="3s"
                      begin={`${(i % 4) * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="12"
                    fill="transparent"
                    onMouseEnter={() =>
                      setHoveredPoint({
                        label: dot.start.label || `Location ${i}`,
                        x: startPoint.x,
                        y: startPoint.y,
                      })
                    }
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                </motion.g>
              </g>

              {/* End Point */}
              <g key={`end-${i}`}>
                <motion.g className="cursor-pointer" whileHover={{ scale: 1.1 }}>
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="2.5"
                    fill={lineColor}
                    filter="url(#glow)"
                  />
                  <circle cx={endPoint.x} cy={endPoint.y} r="2.5" fill={lineColor} opacity="0.4">
                    <animate
                      attributeName="r"
                      from="2.5"
                      to="8"
                      dur="3s"
                      begin={`${(i % 4) * 0.5}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.4"
                      to="0"
                      dur="3s"
                      begin={`${(i % 4) * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="12"
                    fill="transparent"
                    onMouseEnter={() =>
                      setHoveredPoint({
                        label: dot.end.label || `Destination ${i}`,
                        x: endPoint.x,
                        y: endPoint.y,
                      })
                    }
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                </motion.g>
              </g>
            </g>
          );
        })}
      </svg>

      <AnimatePresence>
        {hoveredPoint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: hoveredPoint.y < 140 ? -5 : 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: hoveredPoint.y < 140 ? -5 : 5 }}
            style={{
              left: `${(hoveredPoint.x / 800) * 100}%`,
              top: `${(hoveredPoint.y / 400) * 100}%`,
            }}
            className={`absolute -translate-x-1/2 pointer-events-none z-50 ${
              hoveredPoint.y < 140 ? 'translate-y-0 mt-[12px]' : '-translate-y-full mt-[-12px]'
            }`}
          >
            <div className="relative group">
              {/* Tooltip Content */}
              <div className="bg-[#1B1B1D]/90 backdrop-blur-xl border border-white/10 p-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-1 min-w-[120px]">
                {/* Header with Status */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-white text-[11px] font-semibold tracking-tight">
                    {hoveredPoint.label}
                  </span>
                  <div className="flex items-center gap-1 px-1 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-[8px] font-bold uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                </div>

                {/* Separator */}
                <div className="h-[1px] w-full bg-white/5" />

                {/* Activity Info */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between text-[9px] text-[#919193]">
                    <span>Recent Activity</span>
                    <span className="text-white font-medium">12</span>
                  </div>
                </div>

                {/* Footer Message */}
                <div className="mt-0.5 flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[#6B6B70] text-[8px] italic whitespace-nowrap">
                    Last activity 2m ago
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1B1B1D]/90 rotate-45 border-white/10 ${
                  hoveredPoint.y < 140 ? '-top-1 border-l border-t' : '-bottom-1 border-r border-b'
                }`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
