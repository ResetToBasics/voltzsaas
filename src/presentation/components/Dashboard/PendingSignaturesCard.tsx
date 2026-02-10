import React from 'react';

interface PendingSignaturesCardProps {
  count?: number | string;
}

export const PendingSignaturesCard: React.FC<PendingSignaturesCardProps> = ({ count = 267 }) => {
  return (
    <div className="inline-flex justify-between items-center rounded-[10px] border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden w-full max-w-[380px] h-[90px] transition-all hover:bg-[#1E1E21] cursor-pointer group">
      <div className="flex-1 p-4">
        <div className="text-[#919193] font-medium text-[12px] uppercase tracking-wider mb-1 whitespace-nowrap">
          Pending Signatures
        </div>
        <div className="text-white font-bold text-[28px] leading-tight tracking-tight">{count}</div>
      </div>
      <div className="w-[109px] h-full border-l border-[#2A2A2D] bg-[#111113] flex items-center justify-center overflow-hidden">
        <svg
          width="109"
          height="89"
          viewBox="0 0 109 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-110"
        >
          <g filter="url(#filter0_i_0_276)">
            <g clipPath="url(#clip0_0_276)">
              <mask id="path-1-inside-1_0_276" fill="white">
                <path d="M0 0H109V89H0V0Z" />
              </mask>
              <path d="M0 0H109V89H0V0Z" fill="#111113" />
              <path
                d="M40 23.5H70C73.0376 23.5 75.5 25.9624 75.5 29V59C75.5 62.0376 73.0376 64.5 70 64.5H40C36.9624 64.5 34.5 62.0376 34.5 59V29C34.5 25.9624 36.9624 23.5 40 23.5Z"
                fill="url(#paint0_linear_0_276)"
                stroke="url(#paint1_linear_0_276)"
                filter="url(#depthShadowStat)"
              />
              <path
                d="M44.0904 44.4608L52.8283 51.6936C53.285 52.0717 53.9684 51.9716 54.2976 51.4785L66.5616 33.1071"
                stroke="#919193"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                opacity="0.2"
                d="M-8 23.5H22C25.0376 23.5 27.5 25.9624 27.5 29V59C27.5 62.0376 25.0376 64.5 22 64.5H-8C-11.0376 64.5 -13.5 62.0376 -13.5 59V29C-13.5 25.9624 -11.0376 23.5 -8 23.5Z"
                fill="url(#paint2_linear_0_276)"
                stroke="url(#paint3_linear_0_276)"
                filter="url(#depthShadowStat)"
              />
              <path
                opacity="0.2"
                d="M-8 -24.5H22C25.0376 -24.5 27.5 -22.0376 27.5 -19V11C27.5 14.0376 25.0376 16.5 22 16.5H-8C-11.0376 16.5 -13.5 14.0376 -13.5 11V-19C-13.5 -22.0376 -11.0376 -24.5 -8 -24.5Z"
                fill="url(#paint4_linear_0_276)"
                stroke="url(#paint5_linear_0_276)"
                filter="url(#depthShadowStat)"
              />
              <path
                opacity="0.2"
                d="M40 -24.5H70C73.0376 -24.5 75.5 -22.0376 75.5 -19V11C75.5 14.0376 73.0376 16.5 70 16.5H40C36.9624 16.5 34.5 14.0376 34.5 11V-19C34.5 -22.0376 36.9624 -24.5 40 -24.5Z"
                fill="url(#paint6_linear_0_276)"
                stroke="url(#paint7_linear_0_276)"
                filter="url(#depthShadowStat)"
              />
              <path
                opacity="0.2"
                d="M40 71.5H70C73.0376 71.5 75.5 73.9624 75.5 77V107C75.5 110.038 73.0376 112.5 70 112.5H40C36.9624 112.5 34.5 110.038 34.5 107V77C34.5 73.9624 36.9624 71.5 40 71.5Z"
                fill="url(#paint8_linear_0_276)"
                stroke="url(#paint9_linear_0_276)"
                filter="url(#depthShadowStat)"
              />
              <path
                opacity="0.2"
                d="M-8 71.5H22C25.0376 71.5 27.5 73.9624 27.5 77V107C27.5 110.038 25.0376 112.5 22 112.5H-8C-11.0376 112.5 -13.5 110.038 -13.5 107V77C-13.5 73.9624 -11.0376 71.5 -8 71.5Z"
                fill="url(#paint10_linear_0_276)"
                stroke="url(#paint11_linear_0_276)"
                filter="url(#depthShadowStat)"
              />
              <path
                opacity="0.2"
                d="M88 71.5H118C121.038 71.5 123.5 73.9624 123.5 77V107C123.5 110.038 121.038 112.5 118 112.5H88C84.9624 112.5 82.5 110.038 82.5 107V77C82.5 73.9624 84.9624 71.5 88 71.5Z"
                fill="url(#paint12_linear_0_276)"
                stroke="url(#paint13_linear_0_276)"
                filter="url(#depthShadowStat)"
              />
              <path
                opacity="0.2"
                d="M88 -24.5H118C121.038 -24.5 123.5 -22.0376 123.5 -19V11C123.5 14.0376 121.038 16.5 118 16.5H88C84.9624 16.5 82.5 14.0376 82.5 11V-19C82.5 -22.0376 84.9624 -24.5 88 -24.5Z"
                fill="url(#paint14_linear_0_276)"
                stroke="url(#paint15_linear_0_276)"
                filter="url(#depthShadowStat)"
              />
              <path
                opacity="0.2"
                d="M88 23.5H118C121.038 23.5 123.5 25.9624 123.5 29V59C123.5 62.0376 121.038 64.5 118 64.5H88C84.9624 64.5 82.5 62.0376 82.5 59V29C82.5 25.9624 84.9624 23.5 88 23.5Z"
                fill="url(#paint16_linear_0_276)"
                stroke="url(#paint17_linear_0_276)"
                filter="url(#depthShadowStat)"
              />
            </g>
            <path d="M0 89H1V0H0H-1V89H0Z" fill="#2A2A2D" mask="url(#path-1-inside-1_0_276)" />
          </g>
          <defs>
            <filter
              id="filter0_i_0_276"
              x="0"
              y="0"
              width="109"
              height="89"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="5"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_0_276"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="8.4" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0745098 0 0 0 1 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_276" />
            </filter>
            <filter id="depthShadowStat" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
              <feOffset dx="0" dy="4" result="offsetBlur" />
              <feFlood floodColor="#000000" floodOpacity="0.6" result="offsetColor" />
              <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="shadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="shadow" />
            </filter>
            <linearGradient
              id="paint0_linear_0_276"
              x1="58.6923"
              y1="19.1818"
              x2="65.5484"
              y2="65.8936"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252528" />
              <stop offset="1" stopColor="#202022" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_276"
              x1="57.7857"
              y1="64.2222"
              x2="30.0946"
              y2="34.4948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2A2D" />
              <stop offset="1" stopColor="#39393D" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_276"
              x1="10.6923"
              y1="19.1818"
              x2="17.5484"
              y2="65.8936"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252528" />
              <stop offset="1" stopColor="#202022" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_0_276"
              x1="9.78571"
              y1="64.2222"
              x2="-17.9054"
              y2="34.4948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2A2D" />
              <stop offset="1" stopColor="#39393D" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_0_276"
              x1="10.6923"
              y1="-28.8182"
              x2="17.5484"
              y2="17.8936"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252528" />
              <stop offset="1" stopColor="#202022" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_0_276"
              x1="9.78571"
              y1="16.2222"
              x2="-17.9054"
              y2="-13.5052"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2A2D" />
              <stop offset="1" stopColor="#39393D" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_0_276"
              x1="58.6923"
              y1="-28.8182"
              x2="65.5484"
              y2="17.8936"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252528" />
              <stop offset="1" stopColor="#202022" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_0_276"
              x1="57.7857"
              y1="16.2222"
              x2="30.0946"
              y2="-13.5052"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2A2D" />
              <stop offset="1" stopColor="#39393D" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_0_276"
              x1="58.6923"
              y1="67.1818"
              x2="65.5484"
              y2="113.894"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252528" />
              <stop offset="1" stopColor="#202022" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_0_276"
              x1="57.7857"
              y1="112.222"
              x2="30.0946"
              y2="82.4948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2A2D" />
              <stop offset="1" stopColor="#39393D" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_0_276"
              x1="10.6923"
              y1="67.1818"
              x2="17.5484"
              y2="113.894"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252528" />
              <stop offset="1" stopColor="#202022" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_0_276"
              x1="9.78571"
              y1="112.222"
              x2="-17.9054"
              y2="82.4948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2A2D" />
              <stop offset="1" stopColor="#39393D" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_0_276"
              x1="106.692"
              y1="67.1818"
              x2="113.548"
              y2="113.894"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252528" />
              <stop offset="1" stopColor="#202022" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_0_276"
              x1="105.786"
              y1="112.222"
              x2="78.0946"
              y2="82.4948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2A2D" />
              <stop offset="1" stopColor="#39393D" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_0_276"
              x1="106.692"
              y1="-28.8182"
              x2="113.548"
              y2="17.8936"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252528" />
              <stop offset="1" stopColor="#202022" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_0_276"
              x1="105.786"
              y1="16.2222"
              x2="78.0946"
              y2="-13.5052"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2A2D" />
              <stop offset="1" stopColor="#39393D" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_0_276"
              x1="106.692"
              y1="19.1818"
              x2="113.548"
              y2="65.8936"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252528" />
              <stop offset="1" stopColor="#202022" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_0_276"
              x1="105.786"
              y1="64.2222"
              x2="78.0946"
              y2="34.4948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2A2D" />
              <stop offset="1" stopColor="#39393D" />
            </linearGradient>
            <clipPath id="clip0_0_276">
              <path d="M0 0H109V89H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
