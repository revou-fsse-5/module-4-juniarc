import React from 'react';

interface AuthButtonsPropsType {
  activeStep: number;
  handleBack: () => void;
  handleNext: (values: any) => void;
  handleSubmit: () => void;
  steps: string[];
}

function AuthButtons({
  activeStep,
  handleBack,
  handleNext,
  handleSubmit,
  steps,
}: AuthButtonsPropsType ) {
  return (
    <div className='w-full flex justify-end gap-10 mt-10'>
      <button disabled={activeStep === 0} onClick={handleBack} className={`py-4 px-10 rounded-md ${activeStep === 0 ? 'text-gray-600 pointer-events-none'  : 'text-white hover:bg-gray-700 transition-all'}`}>
        Back
      </button>
      {activeStep === steps.length ? (
        <button onClick={handleSubmit} className='text-white py-4 px-10 rounded-md bg-yellow-medium hover:bg-yellow-600 transition-all'>Sign Up</button>
      ) : (
        <button onClick={handleNext} className='text-white py-4 px-10 rounded-md bg-green-light hover:bg-green-dark transition-all'>Next</button>
      )}
    </div>
  );
}

export default AuthButtons;
