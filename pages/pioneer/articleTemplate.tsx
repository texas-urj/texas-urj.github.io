//article template (Insert ID)

//the below commands import styles that tell the computer how to read the code
import React from 'react';
import Heading from '../components/Heading';

//the code within the return() builds a page
const Article = () => {
  return (
    <>
      {/* Adds the Navbar to the top of the page */}
      <Heading></Heading> 
      {/* Adds the title to the top of the page */}
      <h2>Article Title</h2>
      {/* Adds a paragraph of text. Add a separate <p></p> for each paragraph */}
      <p><a href="" className="underline text-black"></a>Article text.</p>
    </>
  );
};

//this code exports the page we build above so that we can see it on the website
export default Article;