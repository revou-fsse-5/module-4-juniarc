import React, { useState } from 'react';
import { PersonalFormValues, AddressFormValues, AccountFormValues, FormValues } from '../types/authTypes';
import PublicLayout from '../components/layout/PublicLayout';
import AuthStepper from '../components/auth/AuthStepper';
import AuthButtons from '../components/auth/AuthButtons';
import PersonalForm from '../components/auth/signupSteps/PersonalForm';
import AddressForm from '../components/auth/signupSteps/AddressForm';
import AccountForm from '../components/auth/signupSteps/AccountForm';
import ReviewAccount from '../components/auth/signupSteps/ReviewAccount';

function SignupPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>({
    personal: {fullname: '', email: '', dateOfBirth: ''},
    address: { street: '', state: '', city: '', zipCode: ''},
    account: { username: '', password: '', confirmPassword: ''},
  });
  const [isValueValid, setValueValid] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const steps = [
    'Personal Information',
    'Address Information',
    'Account Information',
  ];

  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  const handleNext = (values: any) => {
    switch(activeStep) {
      case 0:
        setFormValues((prevValues) => ({
          ...prevValues,
          personal: values,
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
          account: values
        }));
        break;
    };
    setActiveStep((prevState) => prevState + 1);
  };

  const hanldeSubmit = () => {
    if(isValueValid) {
      setIsDialogOpen(true);
      console.log(isValueValid)
      console.log('dialog')
    }
    return console.log('Data is not valid')
  }

  const renderForm = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <PersonalForm initialValues={formValues.personal} onSubmit={handleNext} />;
      case 1:
        return <AddressForm initialValues={formValues.address} onSubmit={handleNext} handleBack={handleBack}/>;
      case 2:
        return <AccountForm initialValues={formValues.account} onSubmit={handleNext} handleBack={handleBack}/>;
    }
  };

  console.log({ formValues })

  return (
    <PublicLayout>
      <section className="flex flex-col h-full">
        <h2 className="text-white font-secondary font-extrabold text-4xl mb-6">
          Registration
        </h2>
        <AuthStepper activeStep={activeStep} steps={steps} />
        <div className='mt-4 p-2'>
          {renderForm(activeStep)}
        </div>
        {
          activeStep === steps.length && (
            <ReviewAccount userData={formValues} handleBack={handleBack} onSubmit={hanldeSubmit} isOpen={isDialogOpen} setIsOpen={setIsDialogOpen}/>
          )
        }
      </section>
    </PublicLayout>
  );
}

export default SignupPage;
