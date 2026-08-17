import React from 'react'
import { Button } from 'flowbite-react';

interface proppity {
    title: string;
    }
    const Footer = ({title}: proppity) => {
  return (
    <div className='bg-black mb-10 mt-auto w-full'>Questions about the {title}? Email our Editors in Chiefs, Dhroov Pathare at <a className='underline hover:no-underline' href='mailto:dp36455@my.utexas.edu'>dp36455@my.utexas.edu</a> or Samuel Sliter-Hays at <a className='underline hover:no-underline' href='mailto:sms8389@my.utexas.edu'>sms8389@my.utexas.edu</a> with any questions or concerns.</div>

  )}

  export default Footer;
