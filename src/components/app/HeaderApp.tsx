import React from 'react';
import ModeButton from '../buttons/ModeButton';

function HeaderApp() {
  return (
    <header className="flex justify-between items-center">
      <h3 className="text-yellow-medium font-secondary font-extrabold text-3xl">
        Categorify
      </h3>
      <ModeButton />
    </header>
  );
}

export default HeaderApp
