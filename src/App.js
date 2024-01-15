import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Testimonials from './components/Testimonials/Testimonials';
import TodaySpecials from './components/TodaySpecials/TodaySpecials';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <TodaySpecials/>
      <AboutUs/>
      <Testimonials/>
      <Contact/>
      <Join/>
      <Footer/>
    </>
  );
}

export default App;
