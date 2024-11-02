import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DynamicTable = ({ tableName }) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [primaryKey, setPrimaryKey] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/${tableName}`);
      const result = await res.json();
      setData(result);

      if (result.length > 0) {
        setColumns(Object.keys(result[0]));

        switch (tableName) {
          case 'catedra':
            setPrimaryKey('id_catedra');
            break;
          case 'profesor':
            setPrimaryKey('id_profesor');
            break;
          case 'actividades':
            setPrimaryKey('id_actividad');
            break;
          case 'titulos':
            setPrimaryKey('id_titulos');
            break;
          default:
            setPrimaryKey('');
        }
      }
    };

    fetchData();
  }, [tableName]);

  const handleEdit = (itemId) => {
    router.push(`/edit/${tableName}/${itemId}?table=${tableName}${itemId ? `&id=${itemId}` : ''} `);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/${tableName}/${id}`, {
      method: 'DELETE',
    });
    // Refetch data after deletion
    setData(data.filter((item) => item[primaryKey] !== id));
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-6">
      <h1 className="text-3xl font-bold my-4 text-indigo-600">{tableName}</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-500 text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} className="py-2 px-4 border-b border-gray-300 text-left">{column}</th>
            ))}
            <th className="py-2 px-4 border-b border-gray-300 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row[primaryKey]} className="hover:bg-indigo-50">
              {columns.map((column) => (
                <td key={column} className="py-2 px-4 border-b border-gray-300">{row[column]}</td>
              ))}
              <td className="py-2 px-4 border-b border-gray-300">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(row[primaryKey])}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(row[primaryKey])}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
