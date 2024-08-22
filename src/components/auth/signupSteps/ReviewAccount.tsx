import React from 'react';
import { FormValues } from '../types';
import SignupModal from '../../modals/SignupModal';
import ErrorModal from '../../modals/ErrorModal';

interface ReviewAccountPropsType {
  userData: FormValues;
  handleBack: () => void;
  onSubmit: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isErrorModalOpen: boolean; 
  setErrorModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string
}

function ReviewAccount({
  userData,
  handleBack,
  onSubmit,
  isOpen,
  setIsOpen,
  isErrorModalOpen,
  setErrorModalOpen,
  errorMessage,
}: ReviewAccountPropsType ) {
  const { fullname, email, dateOfBirth, address, username } = userData;
  return (
    <section
      className="review-account w-full border border-solid border-white p-4 rounded-lg"
      aria-hidden="false"
    >
      <h2 className="text-green-light font-secondary font-bold text-2xl mb-6">
        Review Your Account
      </h2>
      <div className="table w-full">
        <div className="table-row">
          <div className="table-cell text-left text-white font-semibold">
            Full Name
          </div>
          <div className="table-cell text-left text-white pr-3"> : </div>
          <div className="table-cell text-left text-white">{fullname}</div>
        </div>
        <div className="table-row">
          <div className="table-cell text-left text-white font-semibold">
            Date of Birth
          </div>
          <div className="table-cell text-left text-white"> : </div>
          <div className="table-cell text-left text-white">{dateOfBirth}</div>
        </div>
        <div className="table-row">
          <div className="table-cell text-left text-white font-semibold border-b border-white border-solid pb-4">
            Email
          </div>
          <div className="table-cell text-left text-white border-b border-white border-solid">
            {' '}
            :{' '}
          </div>
          <div className="table-cell text-left text-white border-b border-white border-solid">
            {email}
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell text-left text-white font-semibold pt-4">
            Street
          </div>
          <div className="table-cell text-left text-white"> : </div>
          <div className="table-cell text-left text-white">
            {address.street}
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell text-left text-white font-semibold">
            City
          </div>
          <div className="table-cell text-left text-white"> : </div>
          <div className="table-cell text-left text-white">{address.city}</div>
        </div>
        <div className="table-row">
          <div className="table-cell text-left text-white font-semibold border-b border-white border-solid pb-4">
            State
          </div>
          <div className="table-cell text-left text-white border-b border-white border-solid">
            {' '}
            :{' '}
          </div>
          <div className="table-cell text-left text-white border-b border-white border-solid">
            {address.state}
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell text-left text-white font-semibold pt-4 border-b border-white border-solid pb-4">
            Username
          </div>
          <div className="table-cell text-left text-white border-b border-white border-solid">
            {' '}
            :{' '}
          </div>
          <div className="table-cell text-left text-white border-b border-white border-solid">
            {username}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end gap-10 mt-3">
        <button
          type="button"
          onClick={handleBack}
          className="py-4 px-10 rounded-md text-white hover:bg-gray-700 transition-all"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="text-white py-4 px-10 rounded-md bg-green-light hover:bg-green-dark transition-all"
        >
          Sign Up
        </button>
      </div>
      {isOpen && <SignupModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isErrorModalOpen && (
        <ErrorModal
          isOpen={isErrorModalOpen}
          setIsOpen={setErrorModalOpen}
          parentPage="review-account"
          errorMessage={errorMessage}
        />
      )}
    </section>
  );
}

export default ReviewAccount;
