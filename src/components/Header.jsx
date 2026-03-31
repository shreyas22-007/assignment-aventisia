import React from 'react';
import { Search, Bell, Command, Hexagon, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="h-16 border-b border-white/5 px-4 lg:px-6 flex items-center justify-between text-white shrink-0" style={{ backgroundColor: 'var(--color-secondary)' }}>

      {/* Left side: Logo Placeholder and Workspace Dropdown */}
      <div className="flex items-center gap-3 lg:gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-1.5 hover:bg-white/10 rounded-md transition-colors text-slate-300 hover:text-white">
          <Menu size={22} />
        </button>
        <div className="hidden sm:flex items-center gap-2 text-white font-bold text-lg">
          <Hexagon className="text-[var(--color-primary)] fill-[var(--color-primary)]" size={24} />
          <span>Worcspace</span>
        </div>


        <button className="flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors border border-white/5">
          Worcspace 1
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Center: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-md px-4 justify-center mx-auto">
        <div className="relative group w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-12 py-2 border border-white/10 rounded-lg leading-5 bg-white/5 text-slate-200 placeholder-slate-400 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-[var(--color-primary)] sm:text-sm transition-colors"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div className="flex items-center gap-1 text-slate-400 text-xs">
              <Command size={12} />K
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Notifications and Avatar */}
      <div className="flex items-center gap-2 lg:gap-4">
        <button className="p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors">
          <Bell size={20} />
        </button>
        <button className="h-8 w-8 rounded-full bg-[#B2A4FF] text-[#1E1B4B] flex items-center justify-center text-sm font-bold border-2 border-transparent hover:border-white transition-all">
          GK
        </button>
      </div>

    </header>
  );
};

export default Header;
