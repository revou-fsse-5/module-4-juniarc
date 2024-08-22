import React from 'react';
import { Link } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout';

function GettingStartedPage() {
  return (
    <PublicLayout>
      <section className="flex flex-col h-full justify-center gap-8">
        <h1 className="text-white font-secondary font-extrabold text-9xl">
          Simplify Your Life
        </h1>
        <p className="text-white text-xl leading-10">
          Categorify is a smart organization tool that helps you effortlessly
          sort and manage your digital content.
        </p>
        <Link
          to="/sign-up"
          className="w-fit bg-green-light rounded-2xl px-12 py-6 text-2xl font-secondary font-extrabold hover:bg-green-dark transition-all hover:text-white"
        >
          Get Started
        </Link>
        <p className="text-white text-xl">
          Already have an account ?{' '}
          <Link to="/sign-in" className="text-yellow-medium">
            Sign In
          </Link>
        </p>
      </section>
    </PublicLayout>
  );
}

export default GettingStartedPage;
