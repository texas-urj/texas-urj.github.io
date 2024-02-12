import React from 'react';
import Navigation from './components/Navigation';
import { Accordion } from 'flowbite-react';

const Apply = () => {
  return (
    <>
      <Navigation></Navigation>
      <h1>Apply</h1>
      <section>
      {/* <p>The application for the Texas Undergraduate Research Journal (URJ) are currently closed. Feel free to read the information below and stay tuned for information on our next application cycle.</p> */}
      <p>We are now hiring a new financial assistant director for Spring of 2024. Applications for the 2024-25 school year will open in Fall of 2024. The deadline to apply is promptly Monday, February 12th, 2024 at 11:59PM. No applications will be accepted beyond the specified date. Interview invites will be sent the week following the specified application deadline. There are no explicit requirements to be a part of the URJ; students of all years, majors, and skill sets have joined the URJ and made significant contributions. </p>
      <p>Meetings will be weekly 7-8 pm on Tuesday evenings throughout the fall and spring semesters. Meeting attendance and meaningful contributions are required to remain in good standing. Please make sure you can make time to attend these meetings.</p>
      <p>Feel free to contact Sriya Gullapalli at <a className='underline hover:no-underline' href='mailto:editor.in.chief@texasurj.info'>editor.in.chief@texasurj.info</a> with any questions or concerns. We look forward to reading your application.</p>
      </section>
      
      <section className="flex justify-center items-center mx-10">
      <iframe
        title="Apply here:"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfRBmmaW6P5i5NcJDyW_xTw5_a4zg5BrtEjd-QAm7ZltCE7eA/viewform"
        width="80%"
        height="400"
        className="self-center mx-10 shadow-lg rounded-md mb-10">
        Loading...
      </iframe></section>

      <section className="w-80"> 
      <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Editors</Accordion.Title>
        <Accordion.Content>
          <p>As a member of the editing committee, you will be responsible for paper selection, editing, and publication. In the fall semester, editors work on drafting and editing articles to be published on the Texas URJ blog The Pioneer, assisting in CTURC preparation, and contacting different departments and professors within the University to advertise paper submission to our journal.</p>
          <p>The paper submission deadline for the journal is usually set in January, so paper selection and revisions take up most of the spring semester. First, editors review manuscripts and make initial selections for papers that meet the standards outlined by the selection criteria on the website. Next, editors contact professors in the related department of the paper’s research topic. Each article is reviewed by at least two faculty experts familiar with the subject matter at hand. Based on the review from University faculty, the editing team makes the decision to accept 5-6 papers for publication. Authors work closely with editors on several rounds of revisions to the accepted articles, reflecting the comments of the faculty reviewer as well as additional suggestions from the editors. Once the revisions are completed, the communications department works on the layout of the journal.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Campaigns</Accordion.Title>
        <Accordion.Content>
          <p>As a member of the campaigns committee, you and your team will be responsible for coordinating a number of events throughout this academic year. For each event, you will be responsible for securing a time, location, food, and event logistics. Additionally, you will need to coordinate with the communications committee to ensure that advertisement flyers are printed and distributed at least one week before the event.</p>
          <p>During the fall, the URJ campaigns committee primarily works on the Capital of Texas Undergraduate Research Conference (CTURC), an interdisciplinary statewide research symposium. This event is a collaboration with the Research Student Advisory Council and the Senate of College Councils. Last year, we had over 100 students present work from a variety of disciplines. During the spring, the URJ usually puts on panels centered on research-based discussions. In the past few years, we have held panels on immigration policy, climate change, and the role of science in public policy. The campaigns committee also arranges networking events in the spring to connect undergraduate students to faculty and graduate student mentors.</p>
          <p>The URJ is also present throughout the year at tabling events to increase the Journal’s visibility on campus. Your team will be responsible for registering the URJ for events like the Longhorn Research Bazaar, Research Week, and other events that come up. You will also need to send out sign-up sheets to get URJ members to table at these events.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Communications</Accordion.Title>
        <Accordion.Content>
          <p>As a member of the communications committee, you and your team will be responsible for creating advertisements for the URJ events throughout the academic year.  You will need to coordinate with the campaigns committee to ensure that advertisement flyers are printed and distributed at least one week before the event. While it is not necessary that you redesign existing advertisements, ensure that all information is up-to-date. Additionally, you will be responsible for keeping all social media (i.e. Facebook page and website) current with URJ news and events. If time permits, the communications committee can work on redesigning the URJ publication cover.</p> 
          <p>This year, the Journal is working to produce a standard set of branding guidelines for use across multiple mediums – social media, powerpoints, advertisements, etc. You will also be responsible for refining the Journal’s design in the fall and creating the layout in the spring.</p>        
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Financial</Accordion.Title>
        <Accordion.Content>
          <p>Members of the financial committee are responsible for tracking and planning spending for the Texas URJ. Throughout the year you are responsible for seeking out and applying for funding opportunities through UT. You can also propose ideas such as profit-shares and any other unique opportunities for us to raise money. Financial Directors also work with Communications, Campaigns, and Editors to ensure we appropriately allocate funding for each of our events, any PR materials, and subscriptions to essential editing/website software. </p>
          <p>As a Financial Director, you have an important role: ensuring we maintain enough funds so Texas URJ can continue serving the UT Student Body as a voice for research. </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </section>
    </>
  );
};

export default Apply;
