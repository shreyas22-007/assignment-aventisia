import React, { useState } from 'react';
import InputField from './InputField';
import Dropdown from './Dropdown';

const CreateKnowledgeBaseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    llm: 'text-embedding-ada-002'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-4 flex flex-col gap-1 text-left">
      <InputField
        label="Name (Cannot be edited later)"
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Description"
        name="description"
        type="textarea"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <Dropdown
        label="Vector Store"
        name="vectorStore"
        required
        value={formData.vectorStore}
        onChange={handleChange}
        options={[
          { label: 'Qdrant', value: 'Qdrant' },
          { label: 'Pinecone', value: 'Pinecone' },
          { label: 'Chroma', value: 'Chroma' }
        ]}
      />
      <Dropdown
        label="LLM Embedding Model"
        name="llm"
        required
        value={formData.llm}
        onChange={handleChange}
        options={[
          { label: 'text-embedding-ada-002', value: 'text-embedding-ada-002' },
          { label: 'text-embedding-3-small', value: 'text-embedding-3-small' },
          { label: 'text-embedding-3-large', value: 'text-embedding-3-large' }
        ]}
      />
    </div>
  );
};

export default CreateKnowledgeBaseForm;
