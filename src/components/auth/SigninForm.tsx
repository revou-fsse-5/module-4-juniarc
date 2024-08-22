import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { LoginFormValues } from './types';

interface LoginFormPropsType {
  handleSubmit: (values: LoginFormValues) => void;
}

function SigninForm({ handleSubmit }: LoginFormPropsType) {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: LoginFormValues) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className='"w-full flex flex-col gap-7'>
          <div className="flex flex-col relative">
            <label htmlFor="email" className="text-white font-bold mb-3">
              Email
            </label>
            <Field
              name="email"
              type="text"
              placeholder="Please enter your email"
              className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            />
            <p
              className={`text-red-400 absolute top-full ${
                touched.email && errors.email ? 'visible' : ''
              }`}
            >
              <ErrorMessage name="email" />
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
          <div className="flex items-center mb-4">
          <Field
            name="rememberMe"
            type="checkbox"
            id="rememberMe"
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-white">
            Remember Me
          </label>
        </div>
          <div className="w-full flex justify-between gap-10 mt-3 items-center">
            <p className="text-white">
              Don't have an account ?{' '}
              <Link to="/sign-up" className="text-yellow-medium">
                Sign Up
              </Link>
            </p>
            <button
              type="submit"
              className="text-white py-4 px-10 rounded-md bg-green-light hover:bg-green-dark transition-all"
            >
              Sign In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SigninForm;
