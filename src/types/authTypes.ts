import React from 'react';

interface PersonalFormValues {
  fullname: string;
  email: string;
  dateOfBirth: string;
}

interface PersonalFormProps {
  fullname: string;
  email: string;
  dateOfBirth: string;
  onSubmit: (values: PersonalFormValues) => void;
}

interface AddressFormValues {
  street: string;
  state: string;
  city: string;
  zipCode: string;
}

interface AddressFormProps {
  initialValues: AddressFormValues;
  onSubmit: (values: AddressFormValues) => void;
  handleBack: () => void;
}

interface AccountFormValues {
  username: string;
  password: string;
  confirmPassword: string | null;
}

interface AccountFormProps {
  onSubmit: (values: AccountFormValues) => void;
  handleBack: () => void;
  username: string;
  password: string;
  confirmPassword: string | null;
}

interface FormValues {
  fullname: string;
  email: string;
  dateOfBirth: string;
  address: AddressFormValues;
  username: string;
  password: string;
  confirmPassword: string | null;
}

interface ReviewAccountProps {
  userData: FormValues;
  handleBack: () => void;
  onSubmit: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isErrorModalOpen: boolean; 
  setErrorModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string
}

interface SignupModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginFormProps {
  handleSubmit: (values: LoginFormValues) => void;
}


export type {
  PersonalFormProps,
  PersonalFormValues,
  AddressFormProps,
  AddressFormValues,
  AccountFormProps,
  AccountFormValues,
  FormValues,
  ReviewAccountProps,
  SignupModalProps,
  LoginFormValues,
  LoginFormProps,
};
