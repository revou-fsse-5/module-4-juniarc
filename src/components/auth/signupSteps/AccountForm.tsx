import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { AccountFormProps } from '../../../types/authTypes';

function AddressForm({
  initialValues,
  onSubmit,
  handleBack,
}: AccountFormProps) {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 6 characters long')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwrd must match')
      .required('Confirm Password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="w-full flex flex-col gap-7">
          <div className="flex flex-col relative">
            <label htmlFor="username" className="text-white font-bold mb-3">
              Username
            </label>
            <Field
              name="username"
              type="text"
              placeholder="Please enter your username"
              className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            />
            <p
              className={`text-red-400 absolute top-full ${
                touched.username && errors.username ? 'visible' : ''
              }`}
            >
              <ErrorMessage name="username" />
            </p>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-white font-bold mb-3">
              Password
            </label>
            <Field
              name="password"
              type="password"
              placeholder="Please enter your password"
              className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            />
            <p
              className={`text-red-400 absolute top-full ${
                touched.password && errors.password ? 'visible' : ''
              }`}
            >
              <ErrorMessage name="password" />
            </p>
          </div>
          <div className="flex flex-col relative">
            <label
              htmlFor="confirmPassword"
              className="text-white font-bold mb-3"
            >
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Please enter your confirm password"
              className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            />
            <p
              className={`text-red-400 absolute top-full ${
                touched.confirmPassword && errors.confirmPassword
                  ? 'visible'
                  : ''
              }`}
            >
              <ErrorMessage name="confirmPassword" />
            </p>
          </div>
          <div className="w-full flex justify-end gap-10 mt-3 items-center">
            <p className="text-white">
              Already have an account ?{' '}
              <Link to="/sign-in" className="text-yellow-medium">
                Sign In
              </Link>
            </p>
            <button
              type="button"
              onClick={handleBack}
              className="py-4 px-10 rounded-md text-white hover:bg-gray-700 transition-all"
            >
              Back
            </button>
            <button
              type="submit"
              className="text-white py-4 px-10 rounded-md bg-green-light hover:bg-green-dark transition-all"
            >
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddressForm;
