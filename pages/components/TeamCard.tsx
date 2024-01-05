
'use client';

import { Card } from 'flowbite-react';

interface proppity {
    children: string;
    title: string;
    name: string;
    headshot: string;
    bio: string;
    }
    const TeamCard = ({title, name, headshot, bio}: proppity) => {
  return (
    <div className='mx-4 mb-2'>
    <Card
      className="max-w-sm w-50 h-100"
      imgAlt="No Image available"
      imgSrc={headshot}
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-sepia dark:text-white">
        {name}
      </h5>
      <h3 className='underline font-semibold text-xl'>{title}</h3>
      <span className="font-normal text-umber px-0 mx-0 dark:text-gray-400">{bio}</span>
    </Card></div>
  );
  }

  export default TeamCard;