import React from 'react';

interface TotalContractsCardProps {
  count?: number | string;
}

export const TotalContractsCard: React.FC<TotalContractsCardProps> = ({ count = 680 }) => {
  return (
    <div className="inline-flex justify-between items-center rounded-[10px] border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden w-full max-w-[380px] h-[90px] transition-all hover:bg-[#1E1E21] cursor-pointer group">
      <div className="flex-1 p-4">
        <div className="text-[#919193] font-medium text-[12px] uppercase tracking-wider mb-1 whitespace-nowrap">
          Total Contracts
        </div>
        <div className="text-white font-bold text-[28px] leading-tight tracking-tight">{count}</div>
      </div>
      <div className="w-[100px] h-full border-l border-[#2A2A2D] bg-[#111113] flex items-center justify-center p-4">
        <div className="relative w-[50px] h-[40px] group-hover:scale-110 transition-transform duration-300">
          <svg
            width="50"
            height="40"
            viewBox="0 0 50 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="folderDepth" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="blur" />
                <feOffset dx="0" dy="3" result="offsetBlur" />
                <feFlood floodColor="#000000" floodOpacity="0.5" result="offsetColor" />
                <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="shadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="shadow" />
              </filter>
              <linearGradient
                id="folder_grad_back"
                x1="25"
                y1="4"
                x2="25"
                y2="38"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2A2A2D" />
                <stop offset="1" stopColor="#1B1B1D" />
              </linearGradient>
              <linearGradient
                id="folder_grad_front"
                x1="25"
                y1="10"
                x2="25"
                y2="38"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#252528" />
                <stop offset="1" stopColor="#202022" />
              </linearGradient>
            </defs>
            {/* Folder Body (Back) */}
            <path
              d="M2 8C2 5.79086 3.79086 4 6 4H18.5L22.5 8H44C46.2091 8 48 9.79086 48 12V34C48 36.2091 46.2091 38 44 38H6C3.79086 38 2 36.2091 2 34V8Z"
              fill="url(#folder_grad_back)"
              filter="url(#folderDepth)"
            />
            {/* Folder Front Flap */}
            <path
              d="M2 14C2 11.7909 3.79086 10 6 10H44C46.2091 10 48 11.7909 48 14V34C48 36.2091 46.2091 38 44 38H6C3.79086 38 2 36.2091 2 34V14Z"
              fill="url(#folder_grad_front)"
              stroke="#39393D"
              strokeOpacity="0.5"
              filter="url(#folderDepth)"
            />
            <rect x="36" y="30" width="6" height="1.5" rx="0.75" fill="#54545A" />
          </svg>
        </div>
      </div>
    </div>
  );
};
