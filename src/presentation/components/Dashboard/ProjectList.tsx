'use client';

import { Fragment } from 'react';
import {
  Folder,
  CircleDashed,
  CheckCircle,
  MagnifyingGlass,
  Funnel,
  DotsThreeVertical,
} from '@phosphor-icons/react';
import Image from 'next/image';

interface Project {
  id: string;
  name: string;
  status: 'In Progress' | 'Completed' | 'On Hold';
  progress: number;
  tasks: { completed: number; total: number };
  dueDate: string;
  owner: { name: string; avatar: string };
  color: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Fintech Project',
    status: 'In Progress',
    progress: 70,
    tasks: { completed: 14, total: 20 },
    dueDate: '12 Mar 2024',
    owner: { name: 'Michael M', avatar: 'https://i.pravatar.cc/150?u=michael' },
    color: '#4B66E9',
  },
  {
    id: '2',
    name: 'Brodo Redesign',
    status: 'Completed',
    progress: 100,
    tasks: { completed: 25, total: 25 },
    dueDate: '16 Mar 2024',
    owner: { name: 'Jhon Cena', avatar: 'https://i.pravatar.cc/150?u=jhon' },
    color: '#8B5CF6',
  },
  {
    id: '3',
    name: 'HR Setup',
    status: 'On Hold',
    progress: 70,
    tasks: { completed: 8, total: 20 },
    dueDate: '18 May 2024',
    owner: { name: 'Dawne Jay', avatar: 'https://i.pravatar.cc/150?u=dawne' },
    color: '#06B6D4',
  },
];

const ProgressBar = ({ progress, color }: { progress: number; color: string }) => {
  const segments = 10;
  const activeSegments = Math.round((progress / 100) * segments);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-[1.5px]">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className="w-[2.5px] h-3 rounded-full transition-colors duration-500 shadow-[inset_0_1px_1px_rgba(0,0,0,0.3)]"
            style={{
              backgroundColor: i < activeSegments ? color : '#2A2A2D',
              opacity: i < activeSegments ? 1 : 0.3,
            }}
          />
        ))}
      </div>
      <span className="text-white/90 text-[11px] font-semibold tracking-tight">{progress}%</span>
    </div>
  );
};

const StatusPill = ({ status }: { status: Project['status'] }) => {
  const config = {
    'In Progress': {
      icon: <CircleDashed size={11} className="animate-spin-slow" />,
      bg: 'bg-[#4B66E9]/10',
      border: 'border-[#4B66E9]/20',
      text: 'text-[#4B66E9]',
    },
    Completed: {
      icon: <CheckCircle weight="fill" size={11} />,
      bg: 'bg-[#10B981]/10',
      border: 'border-[#10B981]/20',
      text: 'text-[#10B981]',
    },
    'On Hold': {
      icon: <CircleDashed size={11} />,
      bg: 'bg-[#6B6B70]/10',
      border: 'border-[#6B6B70]/20',
      text: 'text-[#919193]',
    },
  };

  const { icon, bg, border, text } = config[status];

  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 rounded-full border shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] ${bg} ${border} ${text} text-[10px] font-bold uppercase tracking-wider whitespace-nowrap`}
    >
      {icon}
      {status}
    </div>
  );
};

const EtchedDivider = () => (
  <div className="relative w-full">
    <div className="h-[1px] bg-black/60" />
    <div className="h-[1px] bg-white/[0.03]" />
  </div>
);

export function ProjectList() {
  return (
    <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_10px_40px_rgba(0,0,0,0.4)] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 px-1">
        <h3 className="text-lg font-medium text-white tracking-tight">List Projects</h3>

        <div className="flex items-center gap-2">
          <div className="relative group">
            <MagnifyingGlass
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B70] group-focus-within:text-white transition-colors"
            />
            <input
              type="text"
              placeholder="Search here.."
              className="bg-[#141416]/50 border border-[#2A2A2D] rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-[#6B6B70] focus:outline-none focus:border-white/10 transition-all min-w-[200px]"
            />
          </div>

          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2A2A2D] bg-[#141416]/50 hover:bg-[#2A2A2D] transition-all text-[#919193] hover:text-white shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            <Funnel size={16} className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
            <span className="text-xs font-semibold">Filter</span>
          </button>
        </div>
      </div>

      {/* Inner Contour Card */}
      <div className="rounded-lg border border-[#2A2A2D]/60 bg-[#141416]/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1B1B1D]/20">
                <th className="text-left py-3 px-4 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Project Name
                </th>
                <th className="text-center py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Status
                </th>
                <th className="text-left py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Progress
                </th>
                <th className="text-center py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Total Tasks
                </th>
                <th className="text-center py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Due Date
                </th>
                <th className="text-left py-3 px-6 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Owner
                </th>
                <th className="py-3 px-4 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {mockProjects.map((project, idx) => (
                <Fragment key={project.id}>
                  <tr className="group hover:bg-white/[0.02] transition-colors relative">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden"
                          style={{
                            backgroundColor: `${project.color}15`,
                            border: `1px solid ${project.color}30`,
                          }}
                        >
                          <div className="absolute inset-x-0 top-0 h-[20%] bg-white/5" />
                          <Folder
                            size={16}
                            weight="fill"
                            style={{ color: project.color }}
                            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                          />
                        </div>
                        <span className="text-white/90 font-semibold text-[13px] tracking-tight">
                          {project.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex justify-center">
                        <StatusPill status={project.status} />
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <ProgressBar progress={project.progress} color={project.color} />
                    </td>
                    <td className="py-3 px-2">
                      <div className="text-center">
                        <span className="text-white/90 font-bold text-xs">
                          {project.tasks.completed}
                        </span>
                        <span className="text-[#6B6B70] text-[11px] font-semibold">
                          {' '}
                          / {project.tasks.total}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <p className="text-white/80 text-xs font-semibold text-center tracking-tight">
                        {project.dueDate}
                      </p>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/10 shadow-md">
                          <Image
                            src={project.owner.avatar}
                            alt={project.owner.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-white/80 text-xs font-semibold whitespace-nowrap tracking-tight">
                          {project.owner.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <button className="p-1.5 text-[#6B6B70] hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                        <DotsThreeVertical size={16} weight="bold" />
                      </button>
                    </td>
                  </tr>
                  {idx < mockProjects.length - 1 && (
                    <tr>
                      <td colSpan={7} className="p-0">
                        <EtchedDivider />
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
