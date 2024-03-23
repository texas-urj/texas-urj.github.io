import React from 'react'
import { Button } from 'flowbite-react';

interface proppity {
    title: string;
    }
    const Footer = ({title}: proppity) => {
  return (
    <div className='bg-black mb-10 mt-auto w-full'>Questions about the {title}? Email editor.in.chief@texasurj.info with any questions or concerns.</div>

  )}

  export default Footer;