// pages/_app.js
import './index.css'; // Import your global CSS file here
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Add the link to your custom icon */}
        <link rel="icon" href="https://i.imgur.com/vxuO1n6.jpg" />
        {/* You can also specify a title for your page */}
        <title>Texas URJ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;