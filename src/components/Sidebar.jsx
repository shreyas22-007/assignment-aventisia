import React from 'react';
import { 
  Bot, 
  Cpu, 
  BookOpen, 
  Globe, 
  Monitor, 
  ListTree, 
  Zap, 
  Briefcase, 
  PlayCircle, 
  Shield, 
  LibraryBig, 
  KeyRound, 
  Building2, 
  Blocks 
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden" onClick={onClose} />
      )}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col h-full overflow-y-auto transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        {/* Workspace Area - usually in header but sometimes top of sidebar, following screenshot visual left spacing */}
        <div className="p-6">
          <div className="text-xs font-bold text-slate-400 mb-4 tracking-wider">MY PROJECTS</div>
          <nav className="space-y-1">
            <NavItem icon={<Bot size={18} />} label="Agents" />
            <NavItem icon={<Cpu size={18} />} label="AI Models" />
            <NavItem icon={<BookOpen size={18} />} label="Library" />
          </nav>
        </div>

        <div className="px-6 pb-6">
          <div className="text-xs font-bold text-slate-400 mb-4 tracking-wider uppercase">Orchestrator</div>
          <nav className="space-y-1">
            <NavItem icon={<Globe size={18} />} label="Published" />
            <NavItem icon={<Monitor size={18} />} label="Machines" />
            <NavItem icon={<ListTree size={18} />} label="Queues" />
            <NavItem icon={<Zap size={18} />} label="Triggers" />
            <NavItem icon={<Briefcase size={18} />} label="Jobs" />
            <NavItem icon={<PlayCircle size={18} />} label="Executions" />
            <NavItem icon={<Shield size={18} />} label="Vault" />
            <NavItem icon={<LibraryBig size={18} />} label="Knowledge Base" active={true} />
            <NavItem icon={<KeyRound size={18} />} label="Key Store" />
          </nav>
        </div>

        <div className="px-6 pb-6 mt-auto">
          <div className="text-xs font-bold text-slate-400 mb-4 tracking-wider uppercase">Admin</div>
          <nav className="space-y-1">
            <NavItem icon={<Building2 size={18} />} label="Tenant" />
            <NavItem icon={<Blocks size={18} />} label="Integrations" />
          </nav>
        </div>
      </aside>
    </>
  );
};

const NavItem = ({ icon, label, active = false }) => {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors relative ${
        active 
          ? 'bg-[#EEECFF] text-[#4F46E5] rounded-r-lg rounded-l-sm' 
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg'
      }`}
    >
      {active && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4F46E5] rounded-r-sm" />
      )}
      <span className={`${active ? 'text-[#4F46E5]' : 'text-slate-400'}`}>
        {icon}
      </span>
      {label}
    </a>
  );
};

export default Sidebar;
