// src/components/MyComponent.js
'use client';
import React from 'react';
import { Card } from 'flowbite-react';
import Image from 'next/image';

interface proppity {
    thumbnail: string;
    title: string;
    route: string;
    }
    const ArticleCard = ({thumbnail, title, route}: proppity) => {
          return (
            <div className='flex justify-center mx-4'>
            <Card href= {route} className="max-w-sm mb-10" imgSrc={thumbnail}>
      <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h5>
    </Card></div>
          );
        }
    
export default ArticleCard;
        
