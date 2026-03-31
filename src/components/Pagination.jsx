import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Pagination = ({ totalRows, rowsPerPageOptions = [10, 20, 50] }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 mt-auto border-t border-slate-100 pb-4">
      <div className="text-sm font-medium text-slate-700">{totalRows} rows</div>
      
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700 whitespace-nowrap">Rows per page</span>
          <select className="border border-slate-200 text-slate-700 rounded-md text-sm py-1 pl-2 pr-6 bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] form-select">
            {rowsPerPageOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="text-sm font-medium text-slate-700">page 1 of 1</div>

        <div className="flex items-center gap-1">
          <button className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-50 transition-colors" disabled>
            <ChevronsLeft size={16} />
          </button>
          <button className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-50 transition-colors" disabled>
            <ChevronLeft size={16} />
          </button>
          <button className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-50 transition-colors" disabled>
            <ChevronRight size={16} />
          </button>
          <button className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-50 transition-colors" disabled>
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
