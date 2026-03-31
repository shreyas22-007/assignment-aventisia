import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden font-sans">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1 flex flex-col overflow-y-auto w-full bg-[#fafafa] pl-10 lg:pl-32 pr-6 lg:pr-8 py-8 md:py-10">
          <div className="w-full max-w-[1400px] flex flex-col flex-1">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
