import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const Drawer = ({ isOpen, onClose, title, subtitle, children, footer }) => {
  const [render, setRender] = useState(isOpen);

  if (isOpen && !render) {
    setRender(true);
  }

  const handleAnimationEnd = () => {
    if (!isOpen) setRender(false);
  };

  if (!render) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dimmed Overlay */}
      <div
        className={`absolute inset-0 bg-slate-900/30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Slide-in Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-full sm:w-[597px] max-w-[100vw] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onTransitionEnd={handleAnimationEnd}
      >
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold text-slate-800">{title}</h2>
            {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>

        {footer && (
          <div className="p-6 border-t border-slate-100">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
