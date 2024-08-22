import React, { useState } from 'react';

export interface AddCategoryFormValues {
  name: string;
  description: string;
}

interface AddCategoryFromPropsType {
  addCategory: ({ name, description }: AddCategoryFormValues) => void;
}

function AddCategoryForm({ addCategory }: AddCategoryFromPropsType) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleNameChange = ({ target }: any) => {
    setName(target.value);
  };

  const handleDescriptionChange = ({ target }: any) => {
    setDescription(target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.trim() !== '' && description.trim() !== '') {
      addCategory({ name, description });
      setName('');
      setDescription('');
    }
  };

  return (
    <section className="w-full min-h-60 border-s-white border rounded-lg mb-10 p-10 flex justify-center items-center mt-10">
      <form className=" w-full h-full flex justify-between items-center gap-4">
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={handleNameChange}
            className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            required
          />
          <input
            type="text"
            placeholder="Add Description . . ."
            value={description}
            onChange={handleDescriptionChange}
            className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white py-4 px-10 rounded-md bg-green-light hover:bg-green-dark transition-all font-secondary font-bold text-xl"
        >
          Add Category
        </button>
      </form>
    </section>
  );
}

export default AddCategoryForm;
