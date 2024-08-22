import React, { useState } from 'react';
import { FaPen, FaTrashAlt, FaCheck, FaTimes } from 'react-icons/fa';
import { CategoryItemType } from './CategoryItem';
import DeleteModal from '../modals/DeleteModal';

interface ItemButtonsPropsType {
  id: number;
  name: string;
  description: string;
  onDelete: (id: number) => void;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  isEditMode: boolean;
  onEdit: ({id, name, description} :  CategoryItemType) => void;
}

function ItemButtons({
  id,
  name,
  description,
  onDelete,
  isEditMode,
  setIsEditMode,
  onEdit
}: ItemButtonsPropsType) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteModal = () => {
    setIsDialogOpen(true);
  };

  const handleEditButton = () => {
    setIsEditMode(true)
  }

  const handleApplyEdit = ({ id, name, description } : CategoryItemType) => {
    onEdit({ id, name, description })
    setIsEditMode(false)
  }

  const handleCancelEdit = () => {
    setIsEditMode(false);
  }

  return (
    <div className="flex align-middle gap-2 category-handler">
      {isEditMode ? (
        <>
          <button onClick={() => handleApplyEdit({id, name, description})} className="p-3 bg-green-light text-white rounded-lg hover:bg-green-dark h-fit">
            <FaCheck />
          </button>
          <button
            onClick={handleCancelEdit}
            className="p-3 bg-red-dark text-white rounded-lg hover:bg-red-700 h-fit"
          >
            <FaTimes />
          </button>
        </>
      ) : (
        <>
          <button onClick={handleEditButton} className="p-3 bg-green-light text-white rounded-lg hover:bg-green-dark h-fit">
            <FaPen />
          </button>
          <button
            onClick={handleDeleteModal}
            className="p-3 bg-red-dark text-white rounded-lg hover:bg-red-700 h-fit"
          >
            <FaTrashAlt />
          </button>
          <DeleteModal
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            onDeleteCategory={onDelete}
            id={id}
          />
        </>
      )}
    </div>
  );
}

export default ItemButtons;
