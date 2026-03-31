import React from 'react';
import { ChevronDown } from 'lucide-react';

const Dropdown = ({ label, name, options, value, onChange, required }) => {
  return (
    <div className="flex flex-col gap-1.5 mb-5 w-full text-left">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold text-slate-700 flex items-center">
          {label} {required && <span className="text-red-500 ml-1 text-xs">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="appearance-none block w-full px-3 py-2 pr-10 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
