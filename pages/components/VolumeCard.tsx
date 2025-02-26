import React from 'react'
import { Button } from 'flowbite-react';

interface proppity {
    number: string;
    url: string;
    image: string;
    }
    const VolumeCard = ({number, url,image}: proppity) => {
  return (
    <div className='flex justify-center mx-4'>
    <div className='relative overflow-hidden text-center'>
    <a href={url} className='text-center'>{number}</a>
    <a
          href={url}  // Assuming you want the images to be clickable links
          target="_blank"  // Opens the link in a new tab
          rel="noopener noreferrer"  // Recommended for security
        >
          <img
            src={image}
            width={200}
            height={200}
            className="object-cover rounded-md cursor-pointer hover:opacity-75 border-2 border-solid border-black"
          />
    </a>
    </div></div>
  );
}

export default VolumeCard;