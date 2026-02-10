'use client';

import { useState, useRef, MouseEvent } from 'react';
import { MagnifyingGlassPlus, MagnifyingGlassMinus, ArrowsOut } from '@phosphor-icons/react';
import { WorldMap } from '@/components/ui/map';

export function GlobalActivityCard() {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.5, 1));
  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    // Only zoom if control is pressed or if it's a pinch-to-zoom (deltaY + ctrlKey)
    // Note: Modern browsers normalize pinch-to-zoom to wheel events with ctrlKey: true
    const delta = e.deltaY;
    const zoomStep = 0.1;

    setZoom((prev) => {
      const newZoom = delta > 0 ? Math.max(prev - zoomStep, 1) : Math.min(prev + zoomStep, 4);
      return newZoom;
    });
  };

  return (
    <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_10px_40px_rgba(0,0,0,0.4)] p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-white tracking-tight">Global Distribution</h3>
          <p className="text-[#6B6B70] text-[11px] mt-0.5 font-medium tracking-tight">
            Real-time signature activity by region
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 bg-[#141416]/50 rounded-lg p-1 border border-[#2A2A2D]/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
          <button
            onClick={handleZoomIn}
            className="p-1 px-1.5 hover:bg-[#2A2A2D] rounded text-[#919193] hover:text-white transition-all"
            title="Zoom In"
          >
            <MagnifyingGlassPlus size={16} />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-1 px-1.5 hover:bg-[#2A2A2D] rounded text-[#919193] hover:text-white transition-all"
            title="Zoom Out"
          >
            <MagnifyingGlassMinus size={16} />
          </button>
          <div className="w-[1px] h-3 bg-[#2A2A2D] mx-0.5" />
          <button
            onClick={handleReset}
            className="p-1 px-1.5 hover:bg-[#2A2A2D] rounded text-[#919193] hover:text-white transition-all"
            title="Reset View"
          >
            <ArrowsOut size={16} />
          </button>
        </div>
      </div>

      {/* Map Area with Inner Contour */}
      <div
        ref={containerRef}
        className="flex-1 bg-[#111113] rounded-lg border border-[#2A2A2D]/60 shadow-[inset_0_2px_15px_rgba(0,0,0,0.6)] relative overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <div
          className="w-full h-full transition-transform duration-200 ease-out flex items-center justify-center p-4"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: 'center',
          }}
        >
          <WorldMap
            containerClassName="w-full h-full relative overflow-hidden rounded-md"
            mapBackgroundColor="#111113"
            mapDotColor="#9CA3AF40"
            lineColor="#FFFFFF"
            showLabels={false}
            animationDuration={4}
            dots={[
              {
                start: { lat: 40.7128, lng: -74.006, label: 'New York' },
                end: { lat: 51.5074, lng: -0.1278, label: 'London' },
              },
              {
                start: { lat: 34.0522, lng: -118.2437, label: 'Los Angeles' },
                end: { lat: 35.6762, lng: 139.6503, label: 'Tokyo' },
              },
              {
                start: { lat: -23.5505, lng: -46.6333, label: 'São Paulo' },
                end: { lat: 38.7223, lng: -9.1393, label: 'Lisbon' },
              },
              {
                start: { lat: 28.6139, lng: 77.209, label: 'New Delhi' },
                end: { lat: 1.3521, lng: 103.8198, label: 'Singapore' },
              },
            ]}
          />
        </div>

        {/* Legend Overlay with Depth Style */}
        <div className="absolute bottom-4 left-4 bg-[#1B1B1D]/90 backdrop-blur-md border border-white/5 shadow-2xl rounded-lg p-2.5 px-3">
          <div className="flex items-center gap-2.5 text-white">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
              Active Signing Session
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
