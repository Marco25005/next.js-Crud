"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import DynamicForm from '@/src/components/DynamicForm';

const NewPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tableName = searchParams.get('table');
  const itemId = searchParams.get('id');

  const handleFormSave = () => {
    router.push('/');
  };

  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold my-4">Agregar/Editar {tableName}</h1>
      <DynamicForm
        tableName={tableName}
        itemId={itemId}
        onSave={handleFormSave}
      />
    </div>
  );
};

export default NewPage;
