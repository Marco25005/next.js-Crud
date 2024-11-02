"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DynamicTable from '@/src/components/TablaDinamica';
import Menu from '@/src/components/Menu';

const HomePage = () => {
  const router = useRouter();
  const [selectedTable, setSelectedTable] = useState('catedra');
  const [showForm, setShowForm] = useState(false);
  const [itemId, setItemId] = useState(null);

  const handleFormSave = () => {
    setShowForm(false);
    setItemId(null); // Clear item ID after save
  };

  const handleAddClick = () => {
    router.push(`/new?table=${selectedTable}${itemId ? `&id=${itemId}` : ''}`);
  };

  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <Menu onSelect={(table) => { setSelectedTable(table); setShowForm(false); }} />
      <div className="mt-6">
        <button
          className="bg-green-500 text-white p-2 rounded-lg mb-4"
          onClick={handleAddClick}
        >
          {showForm ? 'Cancelar' : `Agregar ${selectedTable}`}
        </button>
        {!showForm && (
          <DynamicTable tableName={selectedTable} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
