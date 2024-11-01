
import React, { useState, useEffect } from 'react';

const DynamicTable = ({ tableName }) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/${tableName}`);
      const result = await res.json();
      setData(result);
      
      if (result.length > 0) {
        setColumns(Object.keys(result[0]));
      }
    };

    fetchData();
  }, [tableName]);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-6">
      <h1 className="text-3xl font-bold my-4 text-indigo-600">{tableName}</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-500 text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} className="py-2 px-4 border-b border-gray-300 text-left">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-indigo-50">
              {columns.map((column) => (
                <td key={column} className="py-2 px-4 border-b border-gray-300">{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
