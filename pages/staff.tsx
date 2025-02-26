import React from 'react';
import Navigation from './components/Navigation';
import TeamCard from './components/TeamCard';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';
import Header from './components/Header';
//        <TeamCard title = "" name="" headshot="" bio=""> </TeamCard>
import Footer from './components/Footer';

const Staff = () => {
  return (
    <>
      <Navigation name='Texas URJ'></Navigation>      
            {/* <Header title='Our Staff'/> */}
      <h1>Staff</h1>
      <section className="mb-10">
      <Accordion collapseAll>
      <AccordionPanel><AccordionTitle className='text-center'>Executive Staff</AccordionTitle>
      <AccordionContent>
      <div className='flex flex-col items-center mb-4'>
        <TeamCard title = "Editor-in-Chief" name="Rachel Muralitharan" 
        headshot="https://i.imgur.com/WhnSnF5.jpg" bio="Rachel Muralitharan is a third-year computational biology major who researches in the Virtual Drug Screening Lab and as a part of the Herrera-Diestra Lab. In her free time, Rachel enjoys reading mystery novels and trying new recipes. Contact her at rachel.murali@utexas.edu"> </TeamCard>
        <TeamCard title = "Editor-in-Chief" name="Siddhartha Shah" 
        headshot="https://i.imgur.com/Eo7CqCq.jpg" bio="Sid is a third-year Biology major who is interested in immunology research and is currently working in Dr. Ehrlich’s lab."> </TeamCard>
        <TeamCard title = "Media Director" name="Meghna Vergis" 
        headshot="https://i.imgur.com/v5xhlIt.jpg" bio="Meghna is a second-year Biology major interested in going into research as a career-either academic or industrial. In her free time, she enjoys listening to music, playing games, and taking walks around the UT campus. Contact her at meghnavergis@utexas.edu"> </TeamCard>
        <TeamCard title = "Financial Director" name="Andrew Kulkarni" 
        headshot="https://i.imgur.com/D8VX4zq.jpg" bio="Andrew is a second-year biology major. He is interested in the administrative side of healthcare and learning more about factors that impede effective patient care on a structural level. In his free time, he enjoys hiking, playing basketball, investing in stocks, and trying new restaurants in Austin. Contact him at andrewskulkarni@gmail.com"> </TeamCard>
        <TeamCard title = "Executive Editor" name="Sifallah Bouyadjera" 
        headshot="https://i.imgur.com/gmE9Ph1.jpg" bio="Sifallah is a third-year Neuroscience major."> </TeamCard>
        <TeamCard title = "Director of Communications" name="Naomi Ichiriu" 
        headshot="https://i.imgur.com/Ypv4hCk.png" bio="Naomi is a second-year Informatics major who is interested in prelaw, specifically intellectual property law. She has an interest in human-centered data science, social justice informatics, and international relations. In her free time, she loves attending concerts, creating art, playing the cello, and exploring Austin."> </TeamCard>
        <TeamCard title = "Director of Campaigns" name="Sravya Gullapalli" 
        headshot="https://i.imgur.com/C54SNGR.jpg" bio="Sravya Gullapalli is a second-year biology major who is also actively involved in the Natural Sciences Council and the Biology Scholars Program. Her hobbies include drawing, bullet journalling, listening to music, and doing 1000 piece puzzles."> </TeamCard>
        </div>
        </AccordionContent></AccordionPanel>
      <Accordion.Panel>
        <Accordion.Title>Assistant Editors</Accordion.Title>
        <Accordion.Content>
      <div className='grid grid-rows-2 gap-4 justify-center'>
        <TeamCard title = "" name="Ishan Arora" 
        headshot="" bio="Ishan is a first-year business major on the premed track whose current research interests lie in oncology and medical imaging. In his spare time he enjoys classical literature, healthcare investments, and Chess."> </TeamCard>
        <TeamCard title = "" name="Dhroov Pathare" 
        headshot="" bio="Dhroov is a first-year dual-majoring in Neuroscience and Plan II Honors. His current research interests lie in nanotechnology and medical oncology. In his free time, he enjoys going to concerts, mountain biking, traveling, and exploring new places to hang out around Austin."> </TeamCard>
        <TeamCard title = "" name="Yashica Sadam" 
        headshot="https://i.imgur.com/VCnMOMM.jpg" bio="Yashica is a second-year Health & Society major who enjoys reading, listening to music, and playing with her dog. She is currently actively involved in Partners in Health Engage and Texas Brain Exercise Initiative. "> </TeamCard>
        <TeamCard title = "" name="Komal Chilukuri" 
        headshot="" bio="Komal is a second-year Public Health major with a minor in ASL and Business. She is getting her EMT license, and in her free time she likes reading, playing guitar, and listening to music. "> </TeamCard>
        <TeamCard title = "" name="Dhruv Nistala" 
        headshot="https://i.imgur.com/9c3Xc9G.jpg" bio="Dhruv is a third-year double majoring in computer science and mathematics. He currently is a research assistant in Dell Medical School focused on using using Machine Learning to preemptively detect signs of T1 Diabetes in the Pancreas. This will be his third year in the Texas URJ. His hobbies include traveling, hiking and watching movies."> </TeamCard>
        <TeamCard title = "" name="Sriya Dommaraju" 
        headshot="https://i.imgur.com/O5hYWUy.jpg" bio="Sriya is a third-year Biology and Plan II major who is actively involved in Biomarker Validation for Inflammatory Breast Cancer as part of the Lambowitz Lab. In her free time, Sriya enjoys playing the guitar, volleyball, and reading books."> </TeamCard>
        <TeamCard title = "" name="Marco Keller" 
        headshot="https://i.imgur.com/D3Q4m9D.jpg" bio="Marco is a fourth-year Biology major who is actively involved in his FRI lab (Plant Pathways) and is doing research in the Johnson Lab. In his free time he plays chess, tennis, and rides trails on his bike."> </TeamCard>
        <TeamCard title = "" name="Keshv Srinivasan" 
        headshot="https://i.imgur.com/p4kkugE.jpg" bio="Keshv is a fourth-year Biochemistry major whose research interests are in stroke therapies and brain imaging technology. In his free time, he enjoys going on hikes, running, and watching sports."> </TeamCard>
        
        </div></Accordion.Content>
        </Accordion.Panel>
      <AccordionPanel>
      <AccordionTitle>Assistant Directors of Campaigns</AccordionTitle>
      <AccordionContent><div className='flex flex-col items-center mb-4'>
        <TeamCard title = "" name="Aditya Venkataraman" 
        headshot="https://i.imgur.com/rYrFlHi.jpg" bio="Aditya is a first-year Biology major who researches animal behaviors and metabolism. His hobbies include bird watching, playing tennis, and watching TV shows."> </TeamCard>
        <TeamCard title = "" name="Saisha Salpekar" 
        headshot="" bio="Saisha loves research! After law school, she wants to be a professor and teach diplomacy!"> </TeamCard>
        </div></AccordionContent></AccordionPanel>
        <AccordionPanel>
        <AccordionTitle>Assistant Directors of Communications</AccordionTitle>
        <AccordionContent><div className='flex flex-col items-center mb-4'>
        <TeamCard title = "" name="Sneha Chandak" 
        headshot="" bio="Sneha is a third-year Biology major who is also perusing the Scientific Computation and Data Science certificate. She is also a writer with HerCampus and involved in the FRI lab Microbe Hackers and the Havird lab. In her free time, she enjoys baking, crocheting, and other habits a grandparent may enjoy."> </TeamCard>
        
        </div></AccordionContent>
        </AccordionPanel>
        </Accordion></section>
        <Footer title="Texas URJ"/>
    </>
  );
};

export default Staff;
