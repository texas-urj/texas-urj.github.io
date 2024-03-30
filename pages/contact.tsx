import React from 'react';
import Navigation from './components/Navigation';
import { Button } from 'flowbite-react';
import Footer from './components/Footer';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

const Contact = () => {
  return (
    <>
      <Navigation name='Texas URJ'></Navigation>           
      <h1>Contact Us</h1>
      <div className="flex flex-col items-center h-screen">
      <Button.Group className='mb-6'>
      <Button color="pink" className='px-4' href='https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Ftexasurj%2F&sa=D&sntz=1&usg=AOvVaw1zLAyjDjO2ZyVFydB-b-V5'>
        <img src='https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png' className="mx-3 h-20 w-20" />
        Instagram
      </Button>
      <Button color="teal" className='px-4' href='https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Ftexasurj%2F&sa=D&sntz=1&usg=AOvVaw0CoKfnX28udzM5fplXACI6'>
        <img src='https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png' className="mx-3 h-20 w-20" />
        Facebook
      </Button>
      <Button color="green" className='px-4' href='https://www.google.com/url?q=https%3A%2F%2Flinktr.ee%2Ftexasurj&sa=D&sntz=1&usg=AOvVaw3yJrzmXCYrPklogz9BvCvZ'>
        <img src='https://cdn.icon-icons.com/icons2/3912/PNG/512/linktree_logo_icon_247832.png' className="mx-3 h-20 w-20" />
        Linktree
      </Button>
    </Button.Group>
      <iframe
        title="Google Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfBhv9ZNUDjqCVv-srE-lDG93te7YfAVax4N8OxYwEINwwM3g/viewform"
        width="640"
        height="800"
        className="shadow-lg rounded-md mb-10">
        Loading...
      </iframe>
      <Footer title="Texas URJ"/>
      </div>
    </>
  );
};

export default Contact;
