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
        <TeamCard title = "Media Director" name="Meghna Vergis" 
        headshot="https://i.imgur.com/v5xhlIt.jpg" bio="Meghna is a second-year Biology major interested in going into research as a career-either academic or industrial. In her free time, she enjoys listening to music, playing games, and taking walks around the UT campus. Contact her at meghnavergis@utexas.edu"> </TeamCard>
        <TeamCard title = "Financial Director" name="Andrew Kulkarni" 
        headshot="https://i.imgur.com/D8VX4zq.jpg" bio="Andrew is a second-year biology major. He is interested in the administrative side of healthcare and learning more about factors that impede effective patient care on a structural level. In his free time, he enjoys hiking, playing basketball, investing in stocks, and trying new restaurants in Austin. Contact him at andrewskulkarni@gmail.com"> </TeamCard>
        </div>
        </AccordionContent></AccordionPanel>
      <Accordion.Panel>
        <Accordion.Title>Assistant Editors</Accordion.Title>
        <Accordion.Content>
      <div className='grid grid-rows-2 gap-4 justify-center'>
        <TeamCard title = "" name="Marco Keller" 
        headshot="https://i.imgur.com/D3Q4m9D.jpg" bio="Marco is a third-year Biology major who is actively involved in his FRI lab (Plant Pathways) and is doing research in the Johnson Lab. In his free time he plays chess, tennis, and rides trails on his bike."> </TeamCard>
        <TeamCard title = "" name="Alp Kaya" 
        headshot="https://i.imgur.com/l09kmdT.jpg" bio="Alp is a second-year Math major whose current research interests lie in Mathematical Physics and Pure Mathematics. In his spare time, he enjoys playing CS and learning about philosophy."> </TeamCard>
        <TeamCard title = "" name="Siddhartha Shah" 
        headshot="https://i.imgur.com/Eo7CqCq.jpg" bio="Sid is a second-year Biology major who is interested in immunology research and is currently working in Dr. Ehrlich’s lab."> </TeamCard>
        <TeamCard title = "" name="Keshv Srinivasan" 
        headshot="https://i.imgur.com/p4kkugE.jpg" bio="Keshv is a third-year Biochemistry major whose research interests are in stroke therapies and brain imaging technology. In his free time, he enjoys going on hikes, running, and watching sports."> </TeamCard>
        <TeamCard title = "" name="Dhruv Nistala" 
        headshot="https://i.imgur.com/9c3Xc9G.jpg" bio="Dhruv is a third-year double majoring in computer science and mathematics. He currently is a research assistant in Dell Medical School focused on using using Machine Learning to preemptively detect signs of T1 Diabetes in the Pancreas. This will be his third year in the Texas URJ. His hobbies include traveling, hiking and watching movies."> </TeamCard>
        <TeamCard title = "" name="Samuel Hitler-Hays" 
        headshot="https://i.imgur.com/WC1HWP0.jpg" bio="Samuel is a first-year Biochemistry major whose interests lie in molecular genetics. In his free time he enjoys chess, wii sports, regular sports, and reading sci-fi."> </TeamCard>
        <TeamCard title = "" name="Yashica Sadam" 
        headshot="https://i.imgur.com/VCnMOMM.jpg" bio="Yashica is a first-year Health & Society major who enjoys reading, listening to music, and playing with her dog. She is currently actively involved in Partners in Health Engage and Texas Brain Exercise Initiative. "> </TeamCard>
        <TeamCard title = "" name="Ananya Sampathkumar" 
        headshot="https://i.imgur.com/z0ZVRi1.jpg" bio="Ananya is a third-year Public Health major who has engaged in Neuropsychological research over the past 4 semesters. She also helped co-found Texas SAYO and is also an active member in NSC. In her free time, she enjoys playing volleyball, thrifting, and trying new restaurants."> </TeamCard>
        <TeamCard title = "" name="Haider Nazir" 
        headshot="https://i.imgur.com/8JWT9f2.jpg" bio="Haider is a first-year Physics and Astronomy major and his research interests lie in condensed matter and superconductors. He also enjoys astrophotography and sleeping."> </TeamCard>
        <TeamCard title = "" name="Gabriel Babineaux" 
        headshot="https://i.imgur.com/2rRLt3t.png" bio="Gabriel is a second-year government student whose interests include classical and modern political philosophy. In his free time, he enjoys root beer, video games, and pestering his friends. "> </TeamCard>
        <TeamCard title = "" name="Madison Rojas" 
        headshot="https://i.imgur.com/SnFe1tG.jpg" bio="Madison Rojas is a first year Philosophy and Economics double major on the pre-law track. In addition to the Undergraduate Research Journal, she is active in the UT Austin community as a member of the Women's Resource Agency and Minority Women Pursuing Law student organization. Madison loves discovering new coffee shops and book stores around Austin when she's not hanging out with her dogs, Sunny and Bo. "> </TeamCard>
        <TeamCard title = "" name="Sriya Dommaraju" 
        headshot="https://i.imgur.com/O5hYWUy.jpg" bio="Sriya is a second-year Biology and Plan II major who is actively involved in Biomarker Validation for Inflammatory Breast Cancer as part of the Lambowitz Lab. In her free time, Sriya enjoys playing the guitar, volleyball, and reading books."> </TeamCard>
        <TeamCard title = "" name="Arnav Patil" 
        headshot="https://i.imgur.com/0C8zaAg.jpg" bio="Arnav is a second-year Biochemistry major with a certificate in Spanish for Medical Professions."> </TeamCard>
        <TeamCard title = "" name="Albina Hashmi" 
        headshot="https://i.imgur.com/8d0zW4W.jpg" bio="Albina is a second-year Public Health major with a minor in Government. She is interested in global health and Healthcare advocacy. In her free time she likes reading, baking and listening to music."> </TeamCard>
        <TeamCard title = "" name="Sifallah Bouyadjera" 
        headshot="https://i.imgur.com/gmE9Ph1.jpg" bio="Sifallah is a second-year Neuroscience major."> </TeamCard>
        </div></Accordion.Content>
        </Accordion.Panel>
      <AccordionPanel>
      <AccordionTitle>Assistant Directors of Campaigns</AccordionTitle>
      <AccordionContent><div className='flex flex-col items-center mb-4'>
        <TeamCard title = "" name="Aditya Venkataraman" 
        headshot="https://i.imgur.com/rYrFlHi.jpg" bio="Aditya is a first-year Biology major who researches animal behaviors and metabolism. His hobbies include bird watching, playing tennis, and watching TV shows."> </TeamCard>
        <TeamCard title = "" name="Sravya Gullapalli" 
        headshot="https://i.imgur.com/C54SNGR.jpg" bio="Sravya Gullapalli is a first-year biology major who is also actively involved in the Natural Sciences Council and the Biology Scholars Program. Her hobbies include drawing, bullet journalling, listening to music, and doing 1000 piece puzzles."> </TeamCard>
        </div></AccordionContent></AccordionPanel>
        <AccordionPanel>
        <AccordionTitle>Assistant Directors of Communications</AccordionTitle>
        <AccordionContent><div className='flex flex-col items-center mb-4'>
        <TeamCard title = "" name="Naomi Ichiriu" 
        headshot="https://i.imgur.com/Ypv4hCk.png" bio="Naomi is a first-year Informatics major who is interested in prelaw, specifically intellectual property law. She has an interest in human-centered data science, social justice informatics, and international relations. In her free time, she loves attending concerts, creating art, playing the cello, and exploring Austin."> </TeamCard>
        <TeamCard title = "" name="Zayneh Razzak" 
        headshot="https://i.imgur.com/NAJrin4.jpg" bio="Zayneh is a first-year advertising major who has interests in business, media analytics, and fashion. In her free time, she enjoys singing, exploring new coffee shops, and designing clothing."> </TeamCard>
        <TeamCard title = "" name="Aarushi Anand" 
        headshot="https://i.imgur.com/phH0auO.jpg" bio="Aarushi is a freshmen Biomedical Engineering major, whose research interests lie in pharmaceuticals, drug delivery, and stem cells. In her free time, Aarushi enjoys dancing, swimming, and hiking."> </TeamCard>
        </div></AccordionContent>
        </AccordionPanel>
        </Accordion></section>
        <Footer title="Texas URJ"/>
    </>
  );
};

export default Staff;
