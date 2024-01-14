//reading-dead

//the below commands import styles that tell the computer how to read the code
import React from 'react';
import Navigation from '../components/Navigation';

//the code within the return() builds a page
const Article = () => {
  return (
    <>
      {/* Adds the Navbar to the top of the page */}
      <Navigation></Navigation> 
      {/* Adds the title to the top of the page */}
      <h2>Is Reading Dead?</h2>
      {/* Adds a paragraph of text. Add a separate <p></p> for each paragraph */}
      <p>As a member of Generation Z, we have all endured the comments about phones dominating our lives and ruining our attention span. Growing up in the Digital age where fifteen-second Tik Tok videos dominate our entertainment, the world is under the assumption that Generation Z does not have the attention span to ingest longer forms of content. With the rise of a multitude of digital content spaces, it is natural to assume that reading is declining in younger generations. </p>
      <p><a className='underline'>Tina Brown</a>, editor of Newsweek and the New Yorker, stated at a conference in Goa, India that civilization is “going back to oral culture where written words will become less relevant.” Like Tina, many individuals tend to believe that in the Digital age with audiovisual media a click away, young people have stopped reading. This argument stems from the internal belief that Generation Z, and coming generations, have shorter attention spans. </p>
      <p>But this myth about younger generations having shorter attention spans really stems from the shifts in how attention is presented in the younger generations. Studies by <a href="https://www.agilitypr.com/pr-news/public-relations/no-millennials-attention-spans-arent-shrinking-theyre-getting-more-selective/" className="underline text-black">Kelton Research</a> discovered that Millenials and younger are more selective about the content they digest. 49% percent of the studies participants responded that they are more selective when digesting content and that specifically tailored content holds their attention. Therefore, it is not that future generations have shorter attention spans incapable of reading or ingesting long-form content, it is that with the amount of information available in the Digital age, people have become more adept at finding the content of interest and filtering out the rest. </p>
      <p>Additionally, Generation Z is more adept at multitasking. The <a href="https://understandingteenagers.com.au/generation-z-multitasking-teens/" className="underline text-black">average teenager</a> spends more than 7 hours a day using entertainment media, largely through multitasking, proving that though younger people do not have shorter attention spans, they divide their attention to be able to access the wide variety of media offered to them. </p>
      <p>But does the rise of selective attention and multitasking mean reading is dead? No. Despite the attention scope of youth narrowing, studies by the <a href="" className="underline text-black">Pew Research</a> center showed that as of 2016, 18 to 29-year-olds are the age group most likely to pursue reading. Though the argument is made that Gen Z readers are young and most likely pressured into reading by their school or other authority figures, <a href="" className="underline text-black">34% of Gen Z</a> members report to reading for pleasure. Additionally, Generation Z is the generation that has the most <a href="" className="underline text-black">increased reading habits</a> during the pandemic. </p>
      <p>Though Generation Z is most likely to find books through social media or use e-reading platforms, the love of reading is still the same. So, if you ever doubted whether the generation known for binge-watching hours of TV in one sitting still has the attention for long-form content like reading, they undoubtedly do. </p>
      <p>Despite the rise of Youtube, Netflix, Instagram, Tik Tok, and other audiovisual entertainment, Generation Z is still committed to reading, meaning written words will maintain relevance for generations to come.</p>
    </>
  );
};

//this code exports the page we build above so that we can see it on the website
export default Article;