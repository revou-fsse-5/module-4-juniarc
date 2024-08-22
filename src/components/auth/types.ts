export interface PersonalFormValues {
  fullname: string;
  email: string;
  dateOfBirth: string;
}

export interface AddressFormValues {
  street: string;
  state: string;
  city: string;
  zipCode: string;
}

export interface AccountFormValues {
  username: string;
  password: string;
  confirmPassword: string | null;
}

export interface FormValues {
  fullname: string;
  email: string;
  dateOfBirth: string;
  address: AddressFormValues;
  username: string;
  password: string;
  confirmPassword: string | null;
}

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}
