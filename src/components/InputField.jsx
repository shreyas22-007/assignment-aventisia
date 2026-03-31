import React from 'react';

const InputField = ({ label, name, placeholder, value, onChange, error, hint, required, type = "text" }) => {
  return (
    <div className="flex flex-col gap-1.5 mb-5 w-full text-left">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold text-slate-700 flex items-center">
          {label} {required && <span className="text-red-500 ml-1 text-xs">*</span>}
        </label>
      )}
      
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className={`block w-full px-3 py-2 bg-white border ${error ? 'border-red-500' : 'border-slate-300'} rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow resize-none`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`block w-full px-3 py-2 bg-white border ${error ? 'border-red-500' : 'border-slate-300'} rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow`}
        />
      )}

      {hint && !error && (
        <span className="text-xs text-slate-500 font-medium">{hint}</span>
      )}
      {error && (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
};

export default InputField;
