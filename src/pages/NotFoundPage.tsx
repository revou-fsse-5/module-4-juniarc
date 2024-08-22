import React from 'react';

function NotFoundPage() {
  return (
    <main className="bg-gray-dark min-h-screen w-screen relative overflow-hidden">
      <section className="w-1/2 h-1/2 absolute top-0 left-0 translate-x-1/2 translate-y-1/2 flex flex-col justify-center">
        <div className='w-full'>
          <img
            className="w-full h-full object-cover object-center rounded-2xl"
            src=".\images\not-found-image.jpg"
            alt="not found"
          />
        </div>
        <h2 className="text-white font-secondary font-extrabold text-4xl mt-6 text-center">
          Ups, Page Is Not Found
        </h2>
      </section>
    </main>
  );
}

export default NotFoundPage;
