import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/landing/Nav'
import Home1 from '../components/landing/Home/Home1';
import Home2 from '../components/landing/Home/Home2';
import Home3 from '../components/landing/Home/Home3'
import Footer from '../components/landing/Footer'
import ScrollToTop from '../components/landing/ScrollToTop'

const LandingPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div>
        <Nav />
        <Home1 />
        <Home2 />
        <Home3 />
        <Footer />
        <ScrollToTop />
    </div>
  )
}

export default LandingPage
