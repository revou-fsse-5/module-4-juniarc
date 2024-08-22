import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AddressFormValues } from '../types';

interface AddressFormPropsType {
  initialValues: AddressFormValues;
  onSubmit: (values: AddressFormValues) => void;
  handleBack: () => void;
}

function AddressForm({
  initialValues,
  onSubmit,
  handleBack,
}: AddressFormPropsType) {
  const validationSchema = Yup.object({
    street: Yup.string().required('Street is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.number().required('Zip Code is required'),
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
            <label htmlFor="street" className="text-white font-bold mb-3">
              Street
            </label>
            <Field
              name="street"
              type="text"
              placeholder="Please enter your street address"
              className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            />
            <p
              className={`text-red-400 absolute top-full ${
                touched.street && errors.street ? 'visible' : ''
              }`}
            >
              <ErrorMessage name="street" />
            </p>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="state" className="text-white font-bold mb-3">
              State
            </label>
            <Field
              name="state"
              type="text"
              placeholder="Please enter your state address"
              className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            />
            <p
              className={`text-red-400 absolute top-full ${
                touched.state && errors.state ? 'visible' : ''
              }`}
            >
              <ErrorMessage name="state" />
            </p>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="city" className="text-white font-bold mb-3">
              City
            </label>
            <Field
              name="city"
              type="text"
              placeholder="Please enter your city address"
              className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            />
            <p
              className={`text-red-400 absolute top-full ${
                touched.city && errors.city ? 'visible' : ''
              }`}
            >
              <ErrorMessage name="city" />
            </p>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="zipCode" className="text-white font-bold mb-3">
              Zip Code
            </label>
            <Field
              name="zipCode"
              type="text"
              placeholder="Please enter your Zip Code"
              className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white mb-2"
            />
            <p
              className={`text-red-400 absolute top-full ${
                touched.zipCode && errors.zipCode ? 'visible' : ''
              }`}
            >
              <ErrorMessage name="zipCode" />
            </p>
          </div>
          <div className="w-full flex justify-end gap-10 mt-3 items-center">
            <p className="text-white text-xl">
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
