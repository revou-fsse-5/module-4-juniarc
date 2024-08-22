import React, { useState } from 'react';
import api from '../network/api';
import { FormValues } from '../types/authTypes';
import PublicLayout from '../components/layout/PublicLayout';
import AuthStepper from '../components/auth/AuthStepper';
import PersonalForm from '../components/auth/signupSteps/PersonalForm';
import AddressForm from '../components/auth/signupSteps/AddressForm';
import AccountForm from '../components/auth/signupSteps/AccountForm';
import ReviewAccount from '../components/auth/signupSteps/ReviewAccount';

function SignupPage() {
  const SIGNUP_PAGE = 'signup-page';

  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>({
    fullname: '',
    email: '',
    dateOfBirth: '',
    address: { street: '', state: '', city: '', zipCode: '' },
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [isValueValid, setValueValid] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const steps = [
    'Personal Information',
    'Address Information',
    'Account Information',
  ];

  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  const handleNext = (values: any) => {
    switch (activeStep) {
      case 0:
        setFormValues((prevValues) => ({
          ...prevValues,
          fullname: values.fullname,
          email: values.email,
          dateOfBirth: values.dateOfBirth,
        }));
        break;
      case 1:
        setFormValues((prevValues) => ({
          ...prevValues,
          address: values,
        }));
        break;
      case 2:
        setFormValues((prevValues) => ({
          ...prevValues,
          username: values.username,
          password: values.password,
          confirmPassword: values.confirmPassword,
        }));
        setValueValid(true);
        break;
    }
    setActiveStep((prevState) => prevState + 1);
  };

  const hanldeSubmit = async () => {
    if (isValueValid) {
      try {
        await api.register(formValues);
        setIsDialogOpen(true);
      } catch (error) {
        setErrorModalOpen(true);
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage('An unexpected error occurred');
        }
        console.log(error);
      }
    }
  };

  const renderForm = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <PersonalForm
            fullname={formValues.fullname}
            email={formValues.email}
            dateOfBirth={formValues.dateOfBirth}
            onSubmit={handleNext}
          />
        );
      case 1:
        return (
          <AddressForm
            initialValues={formValues.address}
            onSubmit={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <AccountForm
            username={formValues.username}
            password={formValues.password}
            confirmPassword={formValues.confirmPassword}
            onSubmit={handleNext}
            handleBack={handleBack}
          />
        );
    }
  };

  return (
    <PublicLayout>
      <section className={'flex flex-col h-full'}>
        <h2 className="text-white font-secondary font-extrabold text-4xl mb-6">
          Registration
        </h2>
        <AuthStepper activeStep={activeStep} steps={steps} />
        <div className="mt-4 p-2">{renderForm(activeStep)}</div>
        {activeStep === steps.length && (
          <ReviewAccount
            userData={formValues}
            handleBack={handleBack}
            onSubmit={hanldeSubmit}
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            setErrorModalOpen={setErrorModalOpen}
            isErrorModalOpen={isErrorModalOpen}
            errorMessage={errorMessage}
          />
        )}
      </section>
    </PublicLayout>
  );
}

export default SignupPage;
