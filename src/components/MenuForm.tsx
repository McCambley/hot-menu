import React, { useState } from 'react';
// import { submitMenuForm } from './api';
import { IoAdd } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

interface MenuItem {
    id: string;
    category: string;
    name: string;
    description: string;
}

const MenuForm = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: uuidv4(), category: 'appetizers', name: '', description: '' },
    { id: uuidv4(), category: 'entrees', name: '', description: '' },
    { id: uuidv4(), category: 'desserts', name: '', description: '' },
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({menuItems})
    // submitMenuForm(menuItems);
  };

  const handleMenuItemChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
    const { name, value } = event.target;
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((menuItem) => (menuItem.id === id ? { ...menuItem, [name]: value } : menuItem))
    );
  };

  const handleAddMenuItem = () => {
    setMenuItems((prevMenuItems) => [...prevMenuItems, { id: uuidv4(), category: '', name: '', description: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap justify-center gap-4">
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="w-72 rounded-lg bg-white shadow-lg px-4 py-4">
            <h3 className="text-lg font-semibold mb-2">{menuItem.category}</h3>
            <div className="mb-2">
              <label className="block font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={menuItem.name}
                onChange={(event) => handleMenuItemChange(event, menuItem.id)}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={menuItem.description}
                onChange={(event) => handleMenuItemChange(event, menuItem.id)}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              ></textarea>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button type="button" onClick={handleAddMenuItem} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <IoAdd className="mr-2" />
          Add Menu Item
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button type="submit" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Submit Menu
        </button>
      </div>
    </form>
  );
};

export default MenuForm;

