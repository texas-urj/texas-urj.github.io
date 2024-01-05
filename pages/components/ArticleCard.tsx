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
            <Card href= {route} className="max-w-sm" imgSrc={thumbnail} horizontal>
      <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h5>
    </Card>
          );
        }
    
export default ArticleCard;
        
