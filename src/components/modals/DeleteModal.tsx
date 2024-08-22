import React from 'react';
import Modal from 'react-modal';

interface DeleteModalPropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDeleteCategory: (id: number) => void;
  id: number;
}

function DeleteModal({
  id,
  isOpen,
  setIsOpen,
  onDeleteCategory,
}: DeleteModalPropsType) {
  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onDelete = (id: number) => {
    onDeleteCategory(id);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      parentSelector={() =>
        document.querySelector('.category-handler') || document.body
      }
      className="w-1/2 h-1/2 absolute top-0 left-0 translate-x-1/2 translate-y-1/2"
    >
      <div className="w-4/5 h-fit bg-gray-dark rounded-2xl border border-white border-solid p-8 absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 flex flex-col justify-center items-center">
        <p className="text-white w-full text-center font-bold">
          Are you sure want to delete this category ?
        </p>
        <div className='flex item mt-6'>
          <button
            onClick={onCloseModal}
            className="px-4 py-2 rounded-md text-white hover:bg-gray-700 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={() => onDelete(id)}
            className="bg-red-dark text-white hover:bg-red-700 h-fit px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
