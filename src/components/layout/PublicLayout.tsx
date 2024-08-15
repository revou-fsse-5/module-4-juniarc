import React from 'react';
import HeaderApp from '../app/HeaderApp';

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gray-dark min-h-screen">
      <div className="flex gap-1 justify-between w-screen p-10 min-h-svh h-fit bg-gray-dark">
        <section className="w-1/2 h-full max-h-large flex flex-col gap-8">
          <HeaderApp />
          {children}
        </section>
        <div className="bg-yellow-medium max-h-large w-2/5 rounded-3xl">
          <img className='w-full h-full object-cover object-center rounded-3xl' src=".\images\bg-image.jpg" alt="Background" />
        </div>
      </div>
    </main>
  );
}

export default PublicLayout;
