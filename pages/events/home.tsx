//pioneer home
import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Navigation from '../components/Navigation';

const EventsHome = () => {
  return (
    <>
      <Navigation name='Texas URJ'></Navigation>      
      <h1 className='pt-10'>Events</h1>
      <section className="grid grid-cols-4 gap-6 pb-10 mb-10 sm:grid-cols-1">
      <ArticleCard thumbnail='https://i.imgur.com/WddsjhK.png' title='Socials' route='/events/socials'></ArticleCard></section>
    </>
  );
};

export default EventsHome;