import React from 'react';
import { useAuthContext } from '../../contexts/authContext';

function AuthedLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuthContext();
  const handleLogout = () => {
    logout();
  }

  return (
    <main className="bg-gray-dark min-h-screen p-10">
      <header className="flex justify-between items-center">
        <h3 className="text-yellow-medium font-secondary font-extrabold text-3xl">
          Categorify
        </h3>
        <button className='flex gap-2 items-center text-white font-bold' onClick={handleLogout}>Log Out</button>
      </header>
      {children}
    </main>
  );
}

export default AuthedLayout;
