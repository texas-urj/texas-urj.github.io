import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Submissions = () => {
  return (
    <>
      <Navigation name='Texas URJ'></Navigation>      
      <h1>Submissions</h1>
      {/* <p>Submissions for the 2025-26 academic year are now closed. Keep an eye out in November of 2025 to submit a manuscript for the 2025-26 school year.</p> */}
      {/* <p>Please direct all questions to <a className='underline hover:no-underline' href="mailto:sifallah.bouyadjera@utexas.edu">sifallah.bouyadjera@utexas.edu</a> and cc <a className='underline hover:no-underline' href='mailto:sidshah@utexas.edu'>sidshah@utexas.edu</a></p> */}
      <p>Applications for the 2025-2026 academic year are now open! As you prepare your application, feel free to review the manuscript criteria and common FAQs below to guide your writing/submission process. All submissions are due January 31, 2026.</p> 
      <p>Please direct all questions to <a className='underline hover:no-underline' href="mailto:sifallah.bouyadjera@utexas.edu">sifallah.bouyadjera@utexas.edu</a> and cc <a className='underline hover:no-underline' href='mailto:sidshah@utexas.edu'>sidshah@utexas.edu</a></p>
      <p>On the behalf of our Editing Team, we look forward to reading your manuscript!</p>
      <h2> <a href='https://utexas.qualtrics.com/jfe/form/SV_0rB7jnHiX4QNroO' className='text-orange-800 hover:underline'>Click here to apply</a></h2>
      <div className="flex justify-center items-center">
      <iframe
        title="Apply here:"
        src="https://utexas.qualtrics.com/jfe/form/SV_0rB7jnHiX4QNroO"
        width="50%"
        height="400"
        className="shadow-lg rounded-md mb-10">
        Loading...
      </iframe></div>
      <h2>Manuscript Criteria </h2>
        <p className='font-bold underline text-umber text-xl mb-1'>Originality</p>
            <p>Research should be a significant addition to the accumulated knowledge within your discipline, which implies it must offer something new.</p>
        <p className='font-bold underline text-umber text-xl mb-1'>Organization</p>
            <p>Paper should be organized in a logical and coherent way. Titles, Navigations, subNavigations, etc. should be clear. The basic organization of a research paper (abstract, introduction, methods, etc.) should be organized in a logical way. Please limit your paper to 20 pages or less, not including references.</p>
        <p className='font-bold underline text-umber text-xl mb-1'>Significance</p>
            <p>The significance of a research paper refers to the contribution(s) to and impact of the study on a research field. The significance also signals who benefits from the research findings and how. </p>
        <p className='font-bold underline text-umber text-xl mb-1'>Quality</p>
            <p>The paper should display an in-depth discussion and elaboration found in all sections of the paper. Minimal spelling or grammatical should be present. The paper should demonstrate profound analysis and high quality of writing. Analysis and statements are integrated into the author's own voice and insights. The author should display synthesis of ideas in and between sections and the overall flow of the paper should be coherent.</p>       
        <h2 className='mt-10'>Timeline after submission:</h2>
        <div className='px-6'>
            <img className='px-6' src="https://i.imgur.com/oqF1ocb.png"></img></div>

      <h2 className='mt-10'>Frequently Asked Questions</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Q: What types of submissions does Texas URJ accept?</h3>
        <p className="faq-answer">A: We accept papers of all disciplines. We encourage everyone from any major or area of interest to submit. </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Q: When do submissions open?</h3>
        <p className="faq-answer">A: Traditionally, submissions open mid-Fall of every academic year. However, this year, we will open submissions mid-Summer.</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Q: What types of submissions are allowed?</h3>
        <p className="faq-answer">A: We accept original research work (i.e. scientific research in laboratory settings).  Literature reviews, senior theses, and FRI research is acceptable. However, classwork and essays will not be accepted. Any research conducted as a part of a university course will not be considered.</p> 
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Q: Who does the Texas URJ Volumes target?</h3>
        <p className="faq-answer">A: We target the original research work that is conducted here at the University of Texas Austin. By publishing the works of college students, we strive to showcase the work of college students to the UT community and beyond.</p>
      </div>

      <div className="mb-6 pb-4 mb-10">
        <h3 className="text-xl font-semibold mb-2">Q: I have just graduated from college, can I submit?</h3>
        <p className="faq-answer">A: Yes, you are able to submit! Applications open in the Summer and seniors who have graduated the past Spring prior to the Summer to when submissions open will be able to submit.</p>
      </div>
      <Footer title="Texas URJ"/>
    </>
  );
};

export default Submissions;