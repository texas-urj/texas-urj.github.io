import React from 'react';
import Heading from './components/Navbar';

const Home = () => {
  return (
    <div>
      <Heading></Heading>
      <h1>Welcome to the Home Page</h1>
      <p>The Texas Undergraduate Research Journal is a work of multi-disciplinary research produced and edited by University of Texas at Austin undergraduate students. The Journal is published every spring semester, circulated across campus, and housed in the Library of Congress. Moreover, the URJ organizes various events throughout the academic year to promote student engagement with research on campus.</p>
      <div className="flex items-center justify-center h-screen"><iframe className="absolute inset-0 w-full h-full" src="https://player.vimeo.com/video/105934179?h=b7b4eaea0b" width="640" height="360" frameBorder="0"    allowFullScreen ></iframe></div>
    </div>
  );
};

export default Home;