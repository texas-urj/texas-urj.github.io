//cramming-guide

//the below commands import styles that tell the computer how to read the code
import React from 'react';
import Navigation from '../components/Navigation';

//the code within the return() builds a page
const Article = () => {
  return (
    <>
      {/* Adds the Navbar to the top of the page */}
      <Navigation name='Texas URJ'></Navigation>      
      {/* Adds the title to the top of the page */}
      <h2>A Guide to Cramming Effectively</h2>
      {/* Adds a paragraph of text. Add a separate <p></p> for each paragraph */}
      <div>
      <p>Despite cramming being an ineffective way to perform well on exams, sometimes it becomes a necessity, and when it does, precious minutes of an already tight schedule can’t be wasted, so effective study strategies should be implemented.</p>
      <p>When sitting down to cram the day before an exam, it may be overwhelming to ingest a variety of topics covered on the coming test. When stuck on certain concepts and feeling time tick away, an effective way to comprehend difficult material in a time crunch is to learn the same topic through <a className="underline text-black" href="https://medicine.llu.edu/academics/resources/brain-based-techniques-retention-information">multiple platforms</a>. Using multiple presentations of the content, such as pairing textbook reading with Youtube videos, is beneficial for studying as different types of content engage different parts of the brain. Consequently, ingesting content through multiple platforms engages <a className="underline text-black" href="https://www.daniel-wong.com/2015/08/17/study-smart/">more of the brain in learning</a>. The repetition involved also increases retention despite a lack of processing time. </p>
      <p>However, despite multiple media forms being effective, it's important to not let the time constraint cause you to attempt to view these multiple presentations of content at the same time. Multitasking has been proven to <a className = "underline text-black"href="https://pubmed.ncbi.nlm.nih.gov/26223469/">lower a person’s working and long term memory</a> as individuals have less cognitive control when attempting to focus on multiple things.  Consequently, playing a class lecture in the background while doing last minute homework problems will cause more harm than good by decreasing memory potential and wasting your little time left. </p>
      <p>Some other ways to learn content quickly in the final hours could be reading your notes aloud. A study by the <a className = "underline text-black"href="https://uwaterloo.ca/news/news/study-finds-reading-information-aloud-yourself-improves">University of Waterloo</a> shows that the simple task of verbalizing your notes increases retention as the brain is engaged in both reading and speaking, causing more connection with the content. If reading aloud doesn’t appeal to you, another way to increase remembrance while reading notes is to annotate the pages as you read.  Doing this <a className = "underline text-black"href="https://www-tandfonline-com.ezproxy.lib.utexas.edu/doi/full/10.1080/09588221.2017.1356335">has been proven</a> to increase vocabulary uptake and mental processing, thus increasing retention even when reading notes for the first time the day before the exam. </p>
      <p>After using multiple media sources, going over your notes actively, and resisting the urge to multitask, the best way to cement your knowledge is through self-testing. <a className = "underline text-black"href="https://openurl-ebsco-com.ezproxy.lib.utexas.edu/linksvc/linking.aspx?sid=eue&volume=78&date=20141115&spage=165&issn=0002-9459&stitle=&genre=article&issue=9&title=American+journal+of+pharmaceutical+education.">Self testing</a> is proven to increase exam scores by provoking retrieval and retention, making it a step that should not be skipped even under time constraints. </p>
      <p>All these tasks will still take up time, especially if all left for the night before, but if you're thinking of pulling an all-nighter, don’t. Even if sleep becomes less of a priority in the face of cramming weeks worth of knowledge in your brain, getting <a className = "underline text-black"href="https://eduadvisor.my/articles/ways-to-cram-the-night-before-an-exam/?__cf_chl_rt_tk=uAE2p.GvtX3SqedzLbWM9AC9Sic5Ov.vubwGU5hfUrs-1637601200-0-gaNycGzNC1E">at least three hours of sleep</a> will increase your mental capacity for the exam. Three hours is the duration of one sleep cycle which will allow your mind time to rest and process the information studied. </p>
      <p>And to end this guide to cramming, for an easy memory enhancer, a hydrated mind is essential for learning. A study by <a className = "underline text-black"href="https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/mild-dehydration-impairs-cognitive-performance-and-mood-of-men/3388AB36B8DF73E844C9AD19271A75BF">Cambridge University</a> states that dehydration causes slower reaction times on working memory tasks, meaning you should drink plenty of water on days that you are cramming in order to prevent additional factors working against information uptake. After reading aloud notes, self testing, and annotating, picking up a glass of water should be a piece of cake, so don’t skip out. </p>
      <p>Even though cramming is not the best plan for exam preparation, sometimes as a university student, it’s unavoidable, and if that is your course of action, at least be prepared with study tips and lifestyle alterations to set you up for maximum content uptake under a time limit.</p>
      </div>
    </>
  );
};

//this code exports the page we build above so that we can see it on the website
export default Article;