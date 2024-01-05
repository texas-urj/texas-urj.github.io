// pages/_app.js
import './index.css'; // Import your global CSS file here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
