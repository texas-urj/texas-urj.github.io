//pioneer home
import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Navigation from '../components/Navigation';

const PioneerHome = () => {
  return (
    <>
      <Navigation name='Texas URJ'></Navigation>      
      <h1 className='pt-10'>The Pioneer</h1>
      <section className="grid grid-cols-4 gap-6 pb-10 mb-10 sm:grid-cols-1">
      <div className='flex justify-center'>
      <ArticleCard route = "/pioneer/spotify-playlists" 
      thumbnail='https://i.imgur.com/FL3D8FM.png'
      title='Spotify Playlists: A Novel Form of Self-Expression'/>
      </div><div className='flex justify-center m-4'>
      <ArticleCard route = "/pioneer/cramming-guide" 
      thumbnail='https://i.imgur.com/fu39TBT.png' 
      title='A Guide to Cramming Effectively'/>
      </div><div className='flex justify-center m-4'>
      <ArticleCard route = "/pioneer/sleep-deprivation"
      thumbnail='https://i.imgur.com/l7rGYUC.png'
      title='Long Term Effects of Sleep Deprivation'></ArticleCard>
      </div><div className='flex justify-center m-4'>
      <ArticleCard route = "/pioneer/remembering-dreams"
      thumbnail='https://i.imgur.com/pzvLCgR.png'
      title='Forgetting Dreams: The Science Behind Not Remembering Dreams'></ArticleCard>
      </div><div className='flex justify-center m-4'><ArticleCard route = "/pioneer/think-smaller"
      thumbnail='https://i.imgur.com/5CIC3VD.png'
      title="Let's Think Smaller"></ArticleCard>
      </div><div className='flex justify-center m-4'><ArticleCard route = "/pioneer/perfect-pasta"
      thumbnail='https://i.imgur.com/ZyvwsrJ.png'
      title='The Science of Perfect Pasta'></ArticleCard>
      </div><div className='flex justify-center m-4'><ArticleCard route = "/pioneer/reading-dead"
      thumbnail='https://i.imgur.com/agl09m8.png'
      title='Is Reading Dead?'></ArticleCard></div></section>
    </>
  );
};

export default PioneerHome;