import React from 'react';

interface ExpiringSoonCardProps {
  count?: number | string;
}

export const ExpiringSoonCard: React.FC<ExpiringSoonCardProps> = ({ count = 22 }) => {
  return (
    <div className="inline-flex justify-between items-center rounded-[10px] border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden w-full max-w-[380px] h-[90px] transition-all hover:bg-[#1E1E21] cursor-pointer group">
      <div className="flex-1 p-4">
        <div className="text-[#919193] font-medium text-[12px] uppercase tracking-wider mb-1 whitespace-nowrap">
          Expiring Soon
        </div>
        <div className="text-white font-bold text-[28px] leading-tight tracking-tight">{count}</div>
      </div>
      <div className="w-[109px] h-full border-l border-[#2A2A2D] bg-[#111113] flex items-center justify-center overflow-hidden">
        <div className="relative w-[64px] h-[60px] group-hover:scale-110 transition-transform duration-300">
          <svg
            width="64"
            height="60"
            viewBox="0 0 64 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.31">
              <path
                d="M54.5117 6.50195C55.972 6.50071 57.3737 7.08069 58.4062 8.11328L60.1553 9.8623L60.1641 9.87012L61.6768 11.2461C62.8228 12.2884 63.4766 13.7663 63.4766 15.3154V46.998C63.4766 50.0356 61.0141 52.498 57.9766 52.498H30.834C27.7964 52.498 25.334 50.0356 25.334 46.998V12.0225C25.334 8.98679 27.7935 6.52515 30.8291 6.52246L54.5117 6.50195Z"
                fill="url(#paint0_linear_0_306)"
                stroke="url(#paint1_linear_0_306)"
                filter="url(#depthShadowStatExpiring)"
              />
              <rect
                x="31.8789"
                y="16.9883"
                width="12.5256"
                height="1.17428"
                rx="0.587139"
                fill="#919193"
              />
            </g>
            <foreignObject x="8" y="-1.60039" width="54" height="63.2">
              <div
                style={{
                  backdropFilter: 'blur(2px)',
                  clipPath: 'url(#bgblur_0_0_306_clip_path)',
                  height: '100%',
                  width: '100%',
                }}
              ></div>
            </foreignObject>
            <g>
              <path
                d="M12 8.39962C12 5.08591 14.6863 2.39961 18 2.39961H46.6763C48.1713 2.39961 49.6125 2.95775 50.7176 3.96472L53.5 6.5002L55.9862 8.71014C57.2671 9.84874 58 11.4808 58 13.1946V51.5996C58 54.9133 55.3137 57.5996 52 57.5996H18C14.6863 57.5996 12 54.9133 12 51.5996V8.39962Z"
                fill="url(#paint2_linear_0_306)"
                fillOpacity="0.5"
                filter="url(#depthShadowStatExpiring)"
              />
              <path
                d="M18 2.89961H46.6768C48.047 2.89973 49.368 3.41124 50.3809 4.33418L53.1631 6.86934L53.168 6.87422L55.6543 9.08418C56.8283 10.1279 57.5 11.6237 57.5 13.1945V51.5998C57.4999 54.6373 55.0375 57.0998 52 57.0998H18C14.9625 57.0998 12.5001 54.6373 12.5 51.5998V8.39961L12.5068 8.11641C12.6542 5.21045 15.0574 2.89961 18 2.89961Z"
                stroke="url(#paint3_linear_0_306)"
                strokeOpacity="0.5"
              />
            </g>
            <rect x="20.2793" y="15.2803" width="14.72" height="1.38" rx="0.69" fill="#919193" />
            <rect x="20.2793" y="34.6006" width="29.44" height="1.38" rx="0.69" fill="#54545A" />
            <rect x="20.2793" y="40.1211" width="29.44" height="1.38" rx="0.69" fill="#54545A" />
            <rect x="20.2793" y="45.6396" width="29.44" height="1.38" rx="0.69" fill="#54545A" />
            <path
              d="M6 0.5H35.666C37.0421 0.5 38.3685 1.0155 39.3828 1.94531L43.6621 5.86816L47.7168 9.58496C48.8532 10.6267 49.5 12.098 49.5 13.6396V54C49.5 57.0376 47.0376 59.5 44 59.5H6C2.96243 59.5 0.5 57.0376 0.5 54V6L0.506836 5.7168C0.649465 2.90463 2.90463 0.649465 5.7168 0.506836L6 0.5Z"
              fill="url(#paint4_linear_0_306)"
              stroke="url(#paint5_linear_0_306)"
              strokeOpacity="0.5"
              filter="url(#depthShadowStatExpiring)"
            />
            <rect
              x="11.873"
              y="8.5625"
              width="16"
              height="1.5"
              rx="0.75"
              transform="rotate(45 11.873 8.5625)"
              fill="#919193"
            />
            <rect
              x="10.8124"
              y="19.8762"
              width="16"
              height="1.5"
              rx="0.75"
              transform="rotate(-45 10.8124 19.8762)"
              fill="#919193"
            />
            <rect x="9" y="35" width="32" height="1.5" rx="0.75" fill="#54545A" />
            <rect x="9" y="41" width="32" height="1.5" rx="0.75" fill="#54545A" />
            <rect x="9" y="47" width="32" height="1.5" rx="0.75" fill="#54545A" />
            <defs>
              <filter id="depthShadowStatExpiring" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="blur" />
                <feOffset dx="0" dy="3" result="offsetBlur" />
                <feFlood floodColor="#000000" floodOpacity="0.6" result="offsetColor" />
                <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="shadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="shadow" />
              </filter>
              <clipPath id="bgblur_0_0_306_clip_path" transform="translate(-8 1.60039)">
                <path d="M12 8.39962C12 5.08591 14.6863 2.39961 18 2.39961H46.6763C48.1713 2.39961 49.6125 2.95775 50.7176 3.96472L53.5 6.5002L55.9862 8.71014C57.2671 9.84874 58 11.4808 58 13.1946V51.5996C58 54.9133 55.3137 57.5996 52 57.5996H18C14.6863 57.5996 12 54.9133 12 51.5996V8.39962Z" />
              </clipPath>
              <linearGradient
                id="paint0_linear_0_306"
                x1="47.8464"
                y1="1.75724"
                x2="56.9629"
                y2="53.5175"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#252528" />
                <stop offset="1" stopColor="#202022" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_306"
                x1="47.0015"
                y1="52.1286"
                x2="16.1464"
                y2="24.5252"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2A2A2D" />
                <stop offset="1" stopColor="#39393D" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_0_306"
                x1="39.044"
                y1="-2.61857"
                x2="49.7576"
                y2="58.2096"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#252528" />
                <stop offset="1" stopColor="#202022" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_0_306"
                x1="38.051"
                y1="56.5774"
                x2="1.79044"
                y2="24.1381"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2A2A2D" />
                <stop offset="1" stopColor="#39393D" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_0_306"
                x1="29.3956"
                y1="-5.45455"
                x2="41.0408"
                y2="60.663"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#252528" />
                <stop offset="1" stopColor="#202022" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_0_306"
                x1="28.3163"
                y1="58.8889"
                x2="-11.0973"
                y2="23.6288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2A2A2D" />
                <stop offset="1" stopColor="#39393D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
