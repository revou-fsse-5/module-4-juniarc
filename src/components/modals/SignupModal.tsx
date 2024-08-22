import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

interface SignupModalPropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignupModal({ isOpen, setIsOpen }: SignupModalPropsType) {
  const navigate = useNavigate();

  const onCloseModal = () => {
    setIsOpen(false);
    navigate('/sign-in');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      parentSelector={() =>
        document.querySelector('.review-account') || document.body
      }
      className='w-1/2 h-1/2 absolute top-0 left-0 translate-x-1/2 translate-y-1/2'
    >
      <div className="w-2/5 h-2/5 translate-x-1/2 translate-y-1/2 bg-gray-dark rounded-2xl border border-white border-solid p-6 relative flex justify-center items-center">
        <p className='text-white w-full text-center font-bold'>Signup Success</p>
        <button onClick={onCloseModal} className='bg-green-light text-white absolute bottom-4 right-4 px-4 rounded-lg'>Ok</button>
      </div>
    </Modal>
  );
}

export default SignupModal;
