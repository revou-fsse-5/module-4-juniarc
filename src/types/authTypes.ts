import React from 'react';

interface PersonalFormValues {
  fullname: string;
  email: string;
  dateOfBirth: string;
}

interface PersonalFormProps {
  initialValues: PersonalFormValues;
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
  initialValues: AccountFormValues;
}

interface FormValues {
  personal: PersonalFormValues;
  address: AddressFormValues;
  account: AccountFormValues;
}

interface ReviewAccountProps {
  userData: FormValues;
  handleBack: () => void;
  onSubmit: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SignupModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
};
