//pioneer home
import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Heading from '../components/Heading';

const PioneerHome = () => {
  return (
    <>
      <Heading></Heading>
      <h1>The Pioneer</h1>
      <div className='flex justify-center'>
      <ArticleCard route = "/pioneer/spotify-playlists" thumbnail='https://www.hiclipart.com/free-transparent-background-png-clipart-jmeve' title='Spotify Playlists: A Novel Form of Self-Expression'/>
      </div>
    </>
  );
};

export default PioneerHome;