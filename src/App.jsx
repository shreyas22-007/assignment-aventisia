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
      <div className="flex flex-col flex-1 w-full">

        {/* Page Header */}
        <div className="flex justify-between items-center mb-10 w-full">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Knowledge Base</h1>

          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search.."
                className="pl-9 pr-4 py-2 border border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] bg-white w-[240px] font-medium"
              />
            </div>
            <Button onClick={() => setIsDrawerOpen(true)} className="px-5 py-2.5 gap-2 h-10 text-sm font-semibold shadow-none">
              <Plus size={16} />
              <span>Create New</span>
            </Button>
          </div>
        </div>

        {/* Card Grid Container */}
        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 content-start">
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
        <div className="mt-auto pt-8">
          <Pagination totalRows={6} />
        </div>
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
