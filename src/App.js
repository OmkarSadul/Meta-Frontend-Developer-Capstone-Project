import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
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
      <Footer/>
    </>
  );
}

export default App;
