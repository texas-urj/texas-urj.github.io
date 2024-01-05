import React from 'react'
import { Button } from 'flowbite-react';

interface proppity {
    number: string;
    url: string;
    image: string;
    }
    const VolumeCard = ({number, url,image}: proppity) => {
  return (
    <div className='relative overflow-hidden aspect-w-1 aspect-h-1'>
    <p>{number}</p>
    <a
          href={url}  // Assuming you want the images to be clickable links
          target="_blank"  // Opens the link in a new tab
          rel="noopener noreferrer"  // Recommended for security
        >
          <img
            src={image}
            className=" w-1/4 h-48 object-cover rounded-md cursor-pointer hover:opacity-75 border-2 border-solid border-black"
          />
    </a>
    </div>
  );
}

export default VolumeCard;