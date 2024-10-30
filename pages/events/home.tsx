//pioneer home
import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Navigation from '../components/Navigation';

const EventsHome = () => {
  return (
    <>
      <Navigation name='Texas URJ'></Navigation>      
      <h1 className='pt-10'>Events</h1>
      <p>Our Finding Fellowships panel is coming up on Tuesday, November 5th, 2024 from 7pm-8pm in the WCP Legislative Assembly Room 2.302. Join us to learn about how to find fellowship opportunities! <a href='https://docs.google.com/forms/d/e/1FAIpQLSfueP8b4iUTbi4DqRD7F0U4RvqaKfsFl1PqwbPuE9fJ7nRjAA/viewform'className='underline' >RSVP here!</a></p>
      <section className="grid grid-cols-4 gap-6 pb-10 mb-10 sm:grid-cols-1">
      <ArticleCard thumbnail='https://i.imgur.com/WddsjhK.png' title='Socials' route='/events/socials'></ArticleCard>
      <ArticleCard thumbnail='https://i.imgur.com/k0G8wwN.jpg' title='General Meetings' route='/events/meetings'></ArticleCard>
      <ArticleCard thumbnail='https://i.imgur.com/TgaKoS7.jpg' title='Networking Night' route='/events/networking'></ArticleCard>
      <ArticleCard thumbnail='https://i.imgur.com/zYNtu0b.jpg' title='Pen to Publication' route='/events/penToPublication'></ArticleCard></section>
    </>
  );
};

export default EventsHome;