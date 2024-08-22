import React, { useState } from 'react';
import ItemButtons from './ItemButtons';

export interface CategoryItemType {
  id: number;
  name: string;
  description: string;
}

interface CategoryItemPropsType {
  id: number;
  name: string;
  description: string;
  onDelete: (id: number) => void;
  onEdit: ({id, name, description} :  CategoryItemType) => void;
}

function CategoryItem({
  id,
  name,
  description,
  onDelete,
  onEdit,
}: CategoryItemPropsType) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputName, setInputName] = useState<string>(name);
  const [inputDescription, setInputDescription] = useState<string>(description);

  const handleNameChange = ({ target }: any) => {
    setInputName(target.value);
  };

  const handleDescriptionChange = ({ target }: any) => {
    setInputDescription(target.value);
  };

  return (
    <div className="w-full min-h-60 border-s-white border rounded-lg mb-10 p-10 flex justify-between items-center gap-6">
      {isEditMode ? (
        <form className=" w-full h-full flex flex-col justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Category Name"
            value={inputName}
            onChange={handleNameChange}
            className=" w-full bg-transparent rounded-md border-solid border border-white p-3 font-secondary font-bold text-white text-3xl mb-2"
          />
          <input
            type="text"
            placeholder="Add Description . . ."
            value={inputDescription}
            onChange={handleDescriptionChange}
            className="w-full bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
          />
        </form>
      ) : (
        <div className="w-full h-full items-start justify-start">
          <h3 className="w-full font-secondary font-bold text-white text-3xl mb-4">
            {name}
          </h3>
          <p className="w-full text-white">{description}</p>
        </div>
      )}
      <ItemButtons
        id={id}
        onDelete={onDelete}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        onEdit={onEdit}
        name={inputName}
        description={inputDescription}
      />
    </div>
  );
}

export default CategoryItem;
