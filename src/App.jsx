import React, { useState } from 'react';
import Layout from './components/Layout';
import Card from './components/Card';
import Button from './components/Button';
import Drawer from './components/Drawer';
import Pagination from './components/Pagination';
import CreateKnowledgeBaseForm from './components/CreateKnowledgeBaseForm';
import { Search, Plus } from 'lucide-react';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const cardsData = Array(6).fill({
    title: 'Test',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
    date: '14/07/2025'
  });

  return (
    <Layout>
      <div className="flex flex-col h-full w-full">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">Knowledge Base</h1>

          <div className="flex w-full sm:w-auto items-center gap-2 md:gap-3">
            <div className="relative flex-1 sm:flex-none">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white w-full sm:w-[240px]"
              />
            </div>
            <Button onClick={() => setIsDrawerOpen(true)} className="w-auto sm:w-[140px] px-4 sm:px-0 gap-2 justify-center py-2.5 whitespace-nowrap">
              <Plus size={18} />
              <span className="hidden sm:inline">Create New</span>
              <span className="sm:hidden">Create</span>
            </Button>
          </div>
        </div>

        {/* Card Grid Container */}
        <div className="border border-slate-200 rounded-xl p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 content-start">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                date={card.date}
              />
            ))}
          </div>
        </div>

        {/* Footer Pagination */}
        <Pagination totalRows={6} />
      </div>

      {/* Create New Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Create New Knowledge Base"
        subtitle="Best for quick answers from documents, websites and text files."
        footer={
          <div className="flex justify-end pt-2">
            <Button onClick={() => setIsDrawerOpen(false)} className="px-6 py-2.5 border-0 shadow-none font-bold">
              Create
            </Button>
          </div>
        }
      >
        <CreateKnowledgeBaseForm />
      </Drawer>
    </Layout>
  );
}

export default App;
