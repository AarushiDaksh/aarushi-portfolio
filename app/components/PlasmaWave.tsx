"use client";

import React from "react";

type PlasmaWaveProps = {
  opacity?: number;   // 0–1
  blur?: number;      // px
  speed?: number;     // 0.5 slower … 2 faster
  hueRotate?: boolean;
  grain?: boolean;
  className?: string;
  zIndex?: number;    // fallback if -z-10 is hidden by another opaque bg
};

export default function PlasmaWave({
  opacity = 0.65,
  blur = 30,
  speed = 1,
  hueRotate = true,
  grain = true,
  className = "",
  zIndex = -10,
}: PlasmaWaveProps) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={
        {
          zIndex,
          // runtime CSS vars
          ["--plasma-opacity" as any]: opacity,
          ["--plasma-blur" as any]: `${blur}px`,
          ["--plasma-speed" as any]: speed,
          ["--plasma-hue-running" as any]: hueRotate ? "running" : "paused",
          ["--plasma-grain-visible" as any]: grain ? "1" : "0",
        } as React.CSSProperties
      }
    >
      <div className="plasma__layer" />
      <div className="plasma__fog" />
      <div className="plasma__grain" />

      {/* Styled-JSX so it ALWAYS loads */}
      <style jsx>{`
        :root {
          --tx: 0%;
          --ty: 0%;
          --sat: 120%;
          --hue: 0deg;
        }

        .plasma__layer {
          position: absolute;
          inset: -10%;
          opacity: var(--plasma-opacity);
          background-image:
            radial-gradient(60% 60% at 20% 30%, #ff4dd2 0%, transparent 60%),
            radial-gradient(55% 55% at 80% 25%, #6ea8ff 0%, transparent 60%),
            radial-gradient(70% 70% at 50% 70%, #ffd166 0%, transparent 65%),
            radial-gradient(40% 40% at 10% 80%, #72efdd 0%, transparent 70%),
            radial-gradient(50% 50% at 85% 85%, #b388ff 0%, transparent 65%);
          background-repeat: no-repeat;
          background-size: 120% 120%, 120% 120%, 120% 120%, 120% 120%, 120% 120%;
          mix-blend-mode: screen;
          will-change: transform, filter, opacity;
          transform: translateX(var(--tx)) translateY(var(--ty));
          filter: blur(var(--plasma-blur)) saturate(var(--sat)) hue-rotate(var(--hue));
          animation:
            floatX calc(18s / var(--plasma-speed)) linear infinite,
            floatY calc(22s / var(--plasma-speed)) ease-in-out infinite,
            pulse  calc(12s / var(--plasma-speed)) ease-in-out infinite,
            hue    calc(30s / var(--plasma-speed)) linear infinite;
          animation-play-state: running, running, running, var(--plasma-hue-running);
        }

        .plasma__fog {
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(120% 80% at 50% 100%, rgba(80, 0, 120, 0.35), transparent 60%),
            radial-gradient(80% 60% at 50% 0%, rgba(0, 120, 255, 0.18), transparent 60%);
          mix-blend-mode: overlay;
          filter: blur(calc(var(--plasma-blur) * 0.6));
          opacity: 0.6;
          pointer-events: none;
        }

        .plasma__grain {
          position: absolute;
          inset: 0;
          opacity: calc(0.07 * var(--plasma-grain-visible));
          pointer-events: none;
          mix-blend-mode: soft-light;
          background-image:
            repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 2px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 2px);
          background-size: 100% 100%, 100% 100%;
          animation: grainMove calc(6s / var(--plasma-speed)) steps(2, end) infinite;
        }

        @keyframes floatX {
          0%   { --tx: -3%; }
          50%  { --tx:  3%; }
          100% { --tx: -3%; }
        }
        @keyframes floatY {
          0%   { --ty: 0%; }
          50%  { --ty: 4%; }
          100% { --ty: 0%; }
        }
        @keyframes pulse {
          0%, 100% { --sat: 115%; }
          50%      { --sat: 130%; }
        }
        @keyframes hue {
          0%   { --hue: 0deg; }
          100% { --hue: 360deg; }
        }
        @keyframes grainMove {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(0,-1%,0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .plasma__layer, .plasma__grain { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
