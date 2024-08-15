import React from 'react';
import { FaSun } from 'react-icons/fa';

function ModeButton() {
  return (
    <button className='flex gap-2 items-center text-white'>
      <FaSun/>
      Light Mode
    </button>
  );
}

export default ModeButton;
