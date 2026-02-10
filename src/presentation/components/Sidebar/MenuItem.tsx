'use client';

import { Icon, CaretRight, CaretDown } from '@phosphor-icons/react';
import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  icon: Icon;
  label: string;
  href: string;
  active?: boolean;
  hasSubmenu?: boolean;
  isOpen?: boolean;
  isNew?: boolean;
  children?: React.ReactNode;
}

export const MenuItem = ({
  icon: Icon,
  label,
  href,
  active,
  hasSubmenu,
  isOpen,
  isNew,
  collapsed,
  children,
}: MenuItemProps & { collapsed?: boolean }) => {
  return (
    <li className="list-none w-full">
      <Link
        href={href}
        className={`flex items-center ${collapsed ? 'justify-center px-0 w-8 h-8 mx-auto' : 'px-2.5 py-1.5 w-full'} rounded-lg transition-all duration-200 font-medium text-[12px] mb-0.5 group relative border
          ${
            active
              ? 'bg-gradient-to-br from-[#2a2a2d] to-[#141416] text-white shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] border-white/5'
              : 'text-[#888888] border-transparent hover:bg-gradient-to-br hover:from-[#2a2a2d] hover:to-[#141416] hover:text-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-white/5'
          }
          ${isNew ? 'text-[#555] hover:text-[#888] hover:bg-transparent hover:shadow-none hover:border-transparent' : ''}
        `}
        aria-current={active ? 'page' : undefined}
      >
        <Icon
          size={18}
          className={`min-w-[18px] shrink-0 ${collapsed ? 'mr-0' : 'mr-3'} transition duration-200 ${active ? 'opacity-100 text-[#EDEDED]' : 'opacity-80 group-hover:opacity-100 group-hover:text-[#EDEDED]'}`}
        />
        <div
          className={`flex items-center overflow-hidden transition-all duration-300 ${collapsed ? 'w-0 opacity-0 flex-none' : 'w-full opacity-100 flex-1'}`}
        >
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">{label}</span>
          {hasSubmenu &&
            (isOpen ? (
              <CaretDown size={12} className="ml-auto min-w-[12px]" />
            ) : (
              <CaretRight size={12} className="ml-auto min-w-[12px]" />
            ))}
        </div>
      </Link>
      {isOpen && children && (
        <div className="relative mt-0.5">
          <ul className="pl-0">{children}</ul>
        </div>
      )}
    </li>
  );
};

export const SubmenuItem = ({
  icon: Icon,
  label,
  href,
}: {
  icon: Icon;
  label: string;
  href: string;
}) => {
  return (
    <li className="list-none">
      <Link
        href={href}
        className="flex items-center pl-10 pr-3 py-2 text-[#888888] text-[12px] relative rounded-lg ml-1.5 hover:text-white transition-all duration-200 group border border-transparent"
      >
        {/* Curved Arrow Connector */}
        <svg
          className="absolute left-[16px] top-[-6px] w-4 h-10 text-[#333336]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 0v12a4 4 0 0 0 4 4h6" />
          <path d="m10 12 4 4-4 4" />
        </svg>

        <Icon size={16} className="mr-2 opacity-60 group-hover:opacity-100" />
        <span className="truncate group-hover:underline group-hover:decoration-[#444] group-hover:underline-offset-4">
          {label}
        </span>
      </Link>
    </li>
  );
};
