import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { PersonalFormProps } from '../../../types/authTypes';
import CustomDateInput from '../CustomDateInput';

function PersonalForm({ initialValues, onSubmit }: PersonalFormProps) {
  const validationSchema = Yup.object({
    fullname: Yup.string().required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="w-full flex flex-col gap-7">
          <div className="flex flex-col relative">
            <label htmlFor="fullname" className="text-white font-bold mb-3">
              Full Name
            </label>
            <Field
              name="fullname"
              type="text"
              placeholder="Please enter your fullname"
              className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            />
            <p
              className={`text-red-400 absolute top-full ${
                touched.fullname && errors.fullname ? 'visible' : ''
              }`}
            >
              <ErrorMessage name="fullname" />
            </p>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="email" className="text-white font-bold mb-3">
              Email
            </label>
            <Field
              name="email"
              type="email"
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
            <label htmlFor="dateOfBirth" className="text-white font-bold mb-3">
              Date of Birth
            </label>
            <Field name="dateOfBirth" type="date" component={CustomDateInput} />
            <p
              className={`text-red-400 absolute top-full ${
                touched.dateOfBirth && errors.dateOfBirth ? 'visible' : ''
              }`}
            >
              <ErrorMessage name="dateOfBirth" />
            </p>
          </div>
          <div className="w-full flex justify-end gap-10 mt-3 items-center">
            <p className="text-white">
              Already have an account ?{' '}
              <Link to="/sign-in" className="text-yellow-medium">
                Sign In
              </Link>
            </p>{' '}
            <button
              disabled
              className="py-4 px-10 rounded-md text-gray-600 pointer-events-none"
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

export default PersonalForm;
