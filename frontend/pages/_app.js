import '../styles/globals.css';
import AdBanner from '../components/AdBanner';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AdBanner />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
