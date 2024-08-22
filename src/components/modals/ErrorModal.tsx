import React from "react";
import Modal from 'react-modal';

interface ErrorModalPropsType {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; 
    parentPage: string;
    errorMessage: string;
}

function ErrorModal({ setIsOpen, isOpen, parentPage, errorMessage } : ErrorModalPropsType) {
    const onCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onCloseModal}
          parentSelector={() =>
            document.querySelector(`.${parentPage}`) || document.body
          }
          className="w-1/2 h-1/2 absolute top-0 left-0 translate-x-1/2 translate-y-1/2"
        >
          <div className="w-4/5 h-fit bg-gray-dark rounded-2xl border border-white border-solid p-8 absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 flex flex-col justify-center items-center">
            <p className="text-white w-full text-center font-bold">
              {errorMessage}
            </p>
            <div className='flex item mt-6'>
              <button
                onClick={onCloseModal}
                className="bg-green-light text-white hover:bg-green-dark h-fit px-4 py-2 rounded-lg"
              >
                Ok
              </button>
            </div>
          </div>
        </Modal>
      );
}

export default ErrorModal;