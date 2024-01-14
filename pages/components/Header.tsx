// Header.js

import React from 'react';

const Header = ({title }) => {
  const containerStyle = {
    height: '100vh', // Adjust the height as needed
  };

  return (
    <header className='relative h-50 w-full'>
      <img className='object-cover' src='https://i.imgur.com/5NLFLdB.jpg' alt="Header Image"/>
      <div>
        <h1 className="absolute my-50 mx-auto text-center text-white text-4xl font-bold">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
