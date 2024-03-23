import React from 'react';
import Navigation from './components/Navigation';
import { Button } from 'flowbite-react';
import Footer from './components/Footer';
const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <h1>Texas Undergraduate Research Journal</h1>
      <p className='pb-6 mb-10'>The Texas Undergraduate Research Journal is a work of multi-disciplinary research produced and edited by University of Texas at Austin undergraduate students. The Journal is published every spring semester, circulated across campus, and housed in the Library of Congress. Moreover, the URJ organizes various events throughout the academic year to promote student engagement with research on campus.</p><div className='py-12'></div>
      <div className="py-12 flex items-center justify-center"><iframe className=" inset-0 mt-10 mb-10" src="https://player.vimeo.com/video/105934179?h=b7b4eaea0b" width="640" height="360" frameBorder="0"    allowFullScreen ></iframe></div>
      <Footer title="Texas URJ"/>
    </>
  );
};

export default Home;
