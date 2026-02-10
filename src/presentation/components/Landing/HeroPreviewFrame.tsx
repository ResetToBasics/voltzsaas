'use client';

import Image from 'next/image';
import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import Link from 'next/link';

export function HeroPreviewFrame({
  imageSrc,
  ctaHref = '/dashboard',
  ctaLabel = 'Login',
  customScales,
}: {
  imageSrc?: string;
  ctaHref?: string;
  ctaLabel?: string;
  customScales?: {
    mobile: number;
    sm: number;
    lg: number;
  };
}) {
  const scales = customScales || { mobile: 0.72, sm: 0.78, lg: 0.84 };
  return (
    <div className="relative w-full max-w-[1100px] mx-auto">
      <div className="rounded-[32px] border border-white/10 bg-black/20 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_120px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] p-3">
        <div className="rounded-[28px] border border-white/20 bg-black/40 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="text-[11px] font-semibold text-white/50 tracking-tight hidden sm:block">
                Dashboard Preview
              </span>
            </div>

            <Link
              href={ctaHref}
              className="px-3 py-1.5 rounded-lg bg-[#0b0b0c] text-white text-[11px] font-bold tracking-tight shadow-[0_10px_22px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)] border border-white/10 hover:translate-y-[-1px] hover:shadow-[0_14px_26px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.12)] active:translate-y-[0px] transition-all flex items-center gap-2"
            >
              {ctaLabel}
              <ArrowUpRight size={14} weight="bold" className="opacity-80" />
            </Link>
          </div>

          <div className="relative aspect-[16/9] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.03)_0%,transparent_55%)]">
            {/* Inner frost contour */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.1))] opacity-50" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-none" />
            </div>

            {imageSrc ? (
              <Image src={imageSrc} alt="Dashboard" fill priority className="object-cover" />
            ) : (
              <div className="absolute inset-0 overflow-hidden">
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                    .preview-container {
                      --preview-current-scale: ${scales.mobile};
                      width: 100%;
                      height: 100%;
                      position: relative;
                    }
                    @media (min-width: 640px) {
                      .preview-container { --preview-current-scale: ${scales.sm}; }
                    }
                    @media (min-width: 1024px) {
                      .preview-container { --preview-current-scale: ${scales.lg}; }
                    }
                    .scaled-content {
                      transform: scale(var(--preview-current-scale));
                      width: calc(100% / var(--preview-current-scale));
                      height: calc(100% / var(--preview-current-scale));
                      position: absolute;
                      top: 0;
                      left: 0;
                      transform-origin: 0 0;
                    }
                  `,
                  }}
                />
                <div className="preview-container">
                  <div className="scaled-content">
                    <iframe
                      src="/dashboard"
                      title="Dashboard preview"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="h-full w-full border-0"
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
