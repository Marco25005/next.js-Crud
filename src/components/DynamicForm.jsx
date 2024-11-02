"use client";

import React, { useState, useEffect } from 'react';

const DynamicForm = ({ tableName, itemId, onSave }) => {
  const [formData, setFormData] = useState({});
  const [fields, setFields] = useState([]);

  useEffect(() => {
    if (itemId) {
      // Fetch item data for editing
      fetch(`/api/${tableName}/${itemId}`)
        .then(res => res.json())
        .then(data => setFormData(data));
    }

    // Define the fields based on the table
    let tableFields;
    switch (tableName) {
      case 'catedra':
        tableFields = ['nombre_catedra', 'adscrita_a', 'fecha_fundada', 'cantidad_profesores', 'cantidad_estudiantes'];
        break;
      case 'profesor':
        tableFields = ['nombre', 'e_mail', 'telefono', 'catedra_id'];
        break;
      case 'actividades':
        tableFields = ['investigacionesApro', 'eventos', 'proyectos', 'publicaciones', 'articulos', 'catedra_id'];
        break;
      case 'titulos':
        tableFields = ['tesis_diploma', 'tesis_maestria', 'tesis_doctorado', 'profesor_id_t'];
        break;
      default:
        tableFields = [];
    }
    setFields(tableFields);
  }, [tableName, itemId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = itemId ? 'PUT' : 'POST';
    const endpoint = itemId ? `/api/${tableName}/${itemId}` : `/api/${tableName}`;
    
    // Convert foreign key fields to integers
    const updatedFormData = { ...formData };
    const foreignKeyField = fields[fields.length - 1]; // Assume the last field is the foreign key
    updatedFormData[foreignKeyField] = parseInt(updatedFormData[foreignKeyField], 10);

    await fetch(endpoint, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFormData),
    });

    if (onSave) onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto">
      {fields.map((field) => (
        <div key={field} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
            {field}
          </label>
          <input
            type="text"
            name={field}
            id={field}
            value={formData[field] || ''}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {itemId ? 'Actualizar' : 'Crear'}
      </button>
    </form>
  );
};

export default DynamicForm;
