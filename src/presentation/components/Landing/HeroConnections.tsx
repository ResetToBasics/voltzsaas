import React from 'react';

export function HeroConnections() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow-white" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          <filter id="shadow-line" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.1" />
          </filter>

          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <mask id="fade-mask">
            <rect width="100%" height="100%" fill="white" />
            <radialGradient id="fade-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>
            <rect width="100%" height="100%" fill="url(#fade-grad)" />
          </mask>
        </defs>

        {/* Static Background Lines - Top Left to Center Crossing */}
        <g
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.6"
          fill="none"
          filter="url(#shadow-line)"
        >
          {/* Line 1: Outer Left -> Crosses In -> Ends at Center Left of Container */}
          {/* Shifted Right by ~150px */}
          {/* Path: Start x=330. Crosses to x=500. Ends x=650 (Center-ish) */}
          <path
            id="line1"
            d="M 330,0 V 120 Q 330,150 360,150 H 450 Q 480,150 480,180 V 220 Q 480,250 510,250 H 600"
          />

          {/* Line 2: Inner Left -> Crosses Out -> Ends at Center Top/Left */}
          {/* Start x=250. Down to y=80. Curve Left? Or just Cross?
               Let's make them cross distinctively.
               Line 1 goes Right. Line 2 goes Left?
               "Comecam do lado esquerdo... descem e se cruzam... descem ate o container"
               Implying they are a pair traveling together.
           */}

          {/* Revised Path: Pair traveling from Top-Left to Center. */}
          {/* Line A (Left): M 330,0 V 100 .. crosses to right .. ends at x=650, y=350 */}
          {/* Line B (Right): M 500,0 V 100 .. crosses to left .. ends at x=600, y=400 */}

          <path d="M 330,0 V 100 C 330,200 500,200 500,300 V 450 H 650" />
          <path d="M 500,0 V 100 C 500,200 330,200 330,300 V 400 H 600" />

          {/* Vertical drop to connect to text area fully?
               Container is roughly 290 to 1150.
               x=500 is inside left part. x=450 is inside left part.
           */}
        </g>

        {/* Center Structure */}
        <g
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
          filter="url(#shadow-line)"
        >
          {/* Top Bracket */}
          <path d="M 400,200 q 0,-20 20,-20 H 1020 q 20,0 20,20" strokeOpacity="0.3" />

          {/* Bottom Bracket */}
          <path d="M 400,600 q 0,20 20,20 H 1020 q 20,0 20,-20" strokeOpacity="0.3" />
        </g>

        {/* Glowing Nodes */}
        <g>
          {/* Node at interesection approx x=415 y=150 */}
          <g transform="translate(415, 150)">
            <circle r="4" fill="white" fillOpacity="0.8" />
            <circle r="12" stroke="white" strokeOpacity="0.2" strokeWidth="1" fill="none" />
          </g>

          {/* Node at End Line A (650, 450) */}
          <g transform="translate(650, 450)">
            <circle r="6" fill="white" fillOpacity="0.8" filter="url(#glow-white)" />
            <circle r="14" stroke="white" strokeOpacity="0.2" strokeWidth="1" fill="none" />
          </g>

          {/* Node at End Line B (600, 400) */}
          <g transform="translate(600, 400)">
            <circle r="4" fill="white" fillOpacity="0.6" />
          </g>

          {/* Top start nodes */}
          <g transform="translate(330, 50)">
            <circle r="2" fill="white" fillOpacity="0.4" />
          </g>
          <g transform="translate(500, 50)">
            <circle r="2" fill="white" fillOpacity="0.4" />
          </g>
        </g>

        {/* Animated Particles */}
        <g>
          <circle r="2" fill="white" fillOpacity="0.8">
            <animateMotion
              path="M 330,0 V 100 C 330,200 500,200 500,300 V 450 H 650"
              dur="8s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>

          <circle r="2" fill="white" fillOpacity="0.8">
            <animateMotion
              path="M 500,0 V 100 C 500,200 330,200 330,300 V 400 H 600"
              dur="9s"
              repeatCount="indefinite"
              begin="1s"
            />
          </circle>
        </g>
      </svg>

      {/* Overlay Gradient for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#ECECEC] opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#ECECEC] via-transparent to-[#ECECEC] opacity-50 pointer-events-none" />
    </div>
  );
}
