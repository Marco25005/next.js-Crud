
import { useState } from 'react';

const Menu = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white p-2 rounded-lg"
        onClick={toggleMenu}
      >
        Menú
      </button>
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg">
          <button className="block px-4 py-2 text-blue-700" onClick={() => onSelect('catedra')}>Cátedra</button>
          <button className="block px-4 py-2 text-blue-700" onClick={() => onSelect('profesor')}>Profesor</button>
          <button className="block px-4 py-2 text-blue-700" onClick={() => onSelect('actividades')}>Actividades</button>
          <button className="block px-4 py-2 text-blue-700" onClick={() => onSelect('titulos')}>Títulos</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
