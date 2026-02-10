'use client';

import Image from 'next/image';
import { CaretUpDown } from '@phosphor-icons/react';

interface UserProfileProps {
  name: string;
  email: string;
  avatarUrl: string;
}

export const UserProfile = ({ name, email, avatarUrl }: UserProfileProps) => {
  return (
    <div className="flex items-center p-2 mt-2.5 rounded-lg cursor-pointer hover:bg-[#2a2a2d] border border-transparent hover:border-white/[0.08] hover:border-t-white/[0.12] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-300 group">
      <Image
        src={avatarUrl}
        alt={name}
        width={28}
        height={28}
        className="rounded-md object-cover mr-2.5"
      />
      <div className="flex flex-col leading-tight overflow-hidden">
        <span className="text-[12px] font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </span>
        <span className="text-[10px] text-[#666] whitespace-nowrap overflow-hidden text-ellipsis">
          {email}
        </span>
      </div>
      <CaretUpDown size={12} className="ml-auto text-[#666]" />
    </div>
  );
};
