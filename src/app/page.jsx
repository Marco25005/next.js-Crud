"use client"
import { useState } from 'react';
import DynamicTable from '@/src/components/tablaDinamica';
import Menu from '@/src/components/Menu';

const HomePage = () => {
  const [selectedTable, setSelectedTable] = useState('catedra');

  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <Menu onSelect={setSelectedTable} />
      <div className="mt-6">
        <DynamicTable tableName={selectedTable} />
      </div>
    </div>
  );
};

export default HomePage;
