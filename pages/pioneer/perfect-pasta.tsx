//perfect-pasta

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
      <h2>The Science of Perfect Pasta</h2>
      {/* Adds a paragraph of text. Add a separate <p></p> for each paragraph */}
      <p>We’ve all seen the options of dried pasta spanning aisles in the grocery store and <a className='italic'>oohed</a> and <a className='italic'>ahhed</a> over the flavors and fillings of fresh pasta in cold cases, but what is it like to make pasta at home? Over quarantine, I (like many others, I’m sure) had to find new ways to keep myself occupied. One of the most time-consuming, tedious, yet delicious ways I found to do so was making fresh pasta. </p>
      <p>After watching countless episodes of<a className='italic'>Giada in Italy</a> and chef TikToks and Instagram videos, I set out to make my own pasta. The ingredients, simple: eggs and flour. What could go wrong? The answer: oh so much. </p>
      <p>I set out my ingredients and got to work on the dough. The goal: Tagliatelle. Translated, tagliare means “to cut”, and this shape is a spaghetti length noodle but about a pinky-width thick. I happily added my eggs to my flour, and began to mix them together. First, the mix was too dry. I used a measuring cup (big no no) and added too much flour. Then, I added another egg… what was I supposed to do, cut it in half? This of course made it too wet, like a slimy, chunky, flour-y soup. Eventually…I gave up, my fresh pasta dreams chucked in the bin. </p>
      <p>While the image of Italian grannies making pasta doesn’t immediately relate to the stereotype of  lab coats and test tubes, pasta making, like many other things in the kitchen, requires much more science than one would think. Things like hydration, fat content, mixing technique, salinity, and type of flour (to name a few) all contribute to creating the perfect pasta. Here are just a few of the factors that, when combined, may set you on the path to the perfect pasta. </p>
      <p className="font-bold">Hydration</p>
      <p>The hydration level in pasta refers to the ratio of wet ingredients to dry, in its most simplest form. However, there are so many means of hydrating the flour that the permutations of pasta never end. Pasta usually relies on a basic ratio of flour to egg, or flour to water, or flour to water and oil. </p>
      <p>Water acts as a binding agent to the flour to hold the pasta together. However, what prevents me (and most other chefs) from making a definite golden ratio of water to flour is the fact that moisture is all around us. <a href="" className="underline text-black">Depending on the humidity and altitude</a>, your pasta can change dramatically. </p>
      <p>With flour to egg ratios, it gets even more complicated. Egg yolks hydrate differently than egg whites; the yolks lead to a richer and thicker pasta, but without enough of the whites, the dough will lack the springy, chewiness pasta needs to be pasta. </p>
      <p>However you choose to hydrate your flour depends on your intended shape and consistency of dough, but it also leads to the next variable: flour. </p>
      <p className="font-bold">Flour Type</p>
      <p>What we call pasta usually refers to the Italian varieties of pasta, but <a href="" className="underline text-black">many scholars believe that pasta was actually brought to Italy by Marco Polo from his voyages to China</a>. Considering that China <a href="" className="underline text-black">would not have grown the same type of wheat as Italy</a>, the varieties of pasta began to explode when Chinese noodle making methods were introduced. </p>
      <p>The main types of flour used in modern Italian pasta are 00 flour, Semolina flour, and All-purpose flour. These are all either sourced from different types of wheat, or are processed in a different fashion, leaving each variety to also have a different protein content. 00 flour is commonly used in pasta and pizzas and is a super-fine variety of flour, making it absorb quite a bit of water. Semolina flour is made from durum wheat, not common wheat, and is very coarse. Semolina has a high protein content, and its coarse texture makes it absorb less water than other types of flour. All-purpose flour, the most common in baking and American cooking, is coarser than 00, but not as coarse as Semolina. </p>
      <p className="font-bold">Mixing Method</p>
      <p>Given flour and a liquid, the next variable lies in the time spent mixing the two. Kneading the dough is a very important part of the process and can certainly make or break the pasta. While kneading incorporates the flour and liquid, <a href="" className="underline text-black">it also builds up the gluten in the pasta</a>. The process of pushing the dough, folding, and repeating, stretches the gluten strands to give pasta its characteristic springy texture. However, a longer kneading time can also form too much gluten, making it not stretch as easily. </p>
      <p>After a good knead, the dough should be springy and smooth. Next, comes the resting time, <a href="" className="underline text-black">a very important part of the process</a>, key to letting the gluten relax so you can roll it and shape it, as well as allow the flours to totally hydrate. </p>
      <p className="font-bold"></p>
      <p>At the end of the day, my first pasta quest was a total failure, as I lacked the scientific aspects of the process. Now, I’d consider myself a pasta pro, fully equipped with the knowledge of all the variables into making pasta at home. I can whip up an egg dough for a tagliatelle or ravioli, a semolina dough for some cavatelli or orecchiette, or even an oil based dough for some pici.   </p>
      <p className='font-bold'>Think you’re ready to take on the test? Try these articles detailing pasta dough making for beginners:</p>
      <p><a href="https://www.nytimes.com/2015/05/13/dining/fresh-pasta-made-simply.html" className="underline text-black">NY Times "Fresh Pasta Made Simply"</a></p>
      <p><a href="https://www.seriouseats.com/best-easy-all-purpose-fresh-pasta-dough-recipe-instructions" className="underline text-black">Serious Eats “Best Easy All-purpose Pasta Dough" </a></p>
    </>
  );
};

//this code exports the page we build above so that we can see it on the website
export default Article;