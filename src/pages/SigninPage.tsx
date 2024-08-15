import React from 'react';
import PublicLayout from '../components/layout/PublicLayout';

function SigninPage() {
  return (
    <PublicLayout>
       <section className="flex flex-col h-full">
        <h2 className="text-white font-secondary font-extrabold text-4xl mb-6">
          Sign In
        </h2>
      </section>
    </PublicLayout>
  );
}

export default SigninPage;
