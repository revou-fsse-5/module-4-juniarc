import React from 'react';
import { ReviewAccountProps } from '../../../types/authTypes';
import SignupModal from '../../modals/SignupModal';

function ReviewAccount({ userData, handleBack, onSubmit, isOpen, setIsOpen }: ReviewAccountProps) {
  const { personal, address, account } = userData;
  return (
    <section className="review-account w-full border border-solid border-white p-4 rounded-lg">
      <h2 className="text-green-light font-secondary font-bold text-2xl mb-6">
        Review Your Account
      </h2>
      <div className="table w-full">
        <div className="table-row">
          <div className="table-cell text-left text-white font-semibold">
            Full Name
          </div>
          <div className="table-cell text-left text-white pr-3"> : </div>
          <div className="table-cell text-left text-white">
            {personal.fullname}
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell text-left text-white font-semibold">
            Date of Birth
          </div>
          <div className="table-cell text-left text-white"> : </div>
          <div className="table-cell text-left text-white">
            {personal.dateOfBirth}
          </div>
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
            {personal.email}
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
            {account.username}
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
      <SignupModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}

export default ReviewAccount;
