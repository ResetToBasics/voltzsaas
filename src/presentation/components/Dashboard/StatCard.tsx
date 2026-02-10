'use client';

import React from 'react';
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer } from 'recharts';

import { Skeleton } from '@/presentation/components/ui/Skeleton';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  subtitle?: string;
  chartType: 'area' | 'bar';
  chartColor: string; // Hex color
  data: Array<{ value: number }>;
  loading?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType = 'positive',
  subtitle,
  chartType,
  chartColor,
  data,
  loading,
}) => {
  // Generate a unique ID for gradients/patterns to avoid conflicts
  const id = React.useId().replace(/:/g, '');
  const isPositive = changeType === 'positive';
  const changeColor = isPositive
    ? 'text-emerald-500'
    : changeType === 'negative'
      ? 'text-red-500'
      : 'text-gray-500';
  const bgBadgeColor = isPositive
    ? 'bg-emerald-500/10'
    : changeType === 'negative'
      ? 'bg-red-500/10'
      : 'bg-gray-500/10';

  if (loading) {
    return (
      <div className="flex flex-col justify-between rounded-xl border border-[#2A2A2D] bg-[#1E1E21] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] overflow-hidden min-w-[240px] w-full h-[150px] p-5 relative">
        <div className="z-10 relative w-full">
          <div className="flex justify-between items-start mb-2">
            <Skeleton className="h-3 w-24 bg-white/10" />
            <Skeleton className="h-4 w-12 bg-white/10 rounded" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <Skeleton className="h-8 w-32 bg-white/10" />
          </div>
          {subtitle && <Skeleton className="h-2 w-20 bg-white/5" />}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[60px] opacity-100 pointer-events-none px-4 pb-2 flex items-end">
          <Skeleton className="w-full h-full bg-white/5 rounded-t-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between rounded-xl border border-[#2A2A2D] bg-[#1E1E21] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] overflow-hidden min-w-[240px] w-full h-[150px] p-5 relative group hover:border-[#3A3A3D] transition-all duration-300">
      {/* Header / Content */}
      <div className="z-10 relative">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[#919193] text-xs font-medium">{title}</span>
          <span
            className={`text-[10px] font-bold px-1.5 py-0.5 rounded border border-white/5 ${bgBadgeColor} ${changeColor}`}
          >
            {change}
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
          <span className="text-[#6B6B70] text-xs font-medium">USD</span>
        </div>

        {subtitle && (
          <div className="text-[#6B6B70] text-[10px] mt-0.5 font-medium">{subtitle}</div>
        )}
      </div>

      {/* Chart Background */}
      <div className="absolute inset-x-0 bottom-0 h-[60px] opacity-100 pointer-events-none px-4 pb-2">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'area' ? (
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartColor} stopOpacity={0.2} />
                  <stop offset="100%" stopColor={chartColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={chartColor}
                strokeWidth={2}
                fill={`url(#gradient-${id})`}
                isAnimationActive={false}
              />
            </AreaChart>
          ) : (
            <BarChart data={data} barCategoryGap="20%">
              <defs>
                <pattern
                  id={`stripe-${id}`}
                  patternUnits="userSpaceOnUse"
                  width="4"
                  height="4"
                  patternTransform="rotate(45)"
                >
                  <rect
                    width="2"
                    height="4"
                    transform="translate(0,0)"
                    fill={chartColor}
                    opacity={0.3}
                  />
                </pattern>
              </defs>
              <Bar
                dataKey="value"
                fill={`url(#stripe-${id})`}
                radius={[6, 6, 0, 0]}
                isAnimationActive={false}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};
