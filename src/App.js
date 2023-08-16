import './App.css';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Connect from './components/Connect';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

export default function App() {

  // React Intersection Observer for Experience section to achieve scroll snap 
  const { ref, inView, entry } = useInView({
    threshold: 0.4, // Trigger when 40% of the section is in view
  });
  useEffect(() => {
    if (inView && entry) {
      const { top } = entry.boundingClientRect;
      const screenHeight = window.innerHeight;

      // Calculate the target position to scroll to
      const targetPosition = top + window.scrollY;

      // Scroll smoothly to the target position
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }, [inView, entry]);

  return (
    <div className="App font-shareTech w-[100vw] overflow">
      <Navbar/>
      <Home />
      <Tech />
      <div ref={ref}>
        <Experience />
      </div>
      <Projects />
      <AboutMe />
      <Connect />
      <Footer />
    </div>
  );
}

// TODO
// fonts too big, especially Home and Tech. Can standardise from Connect
// projects navbar navigation doesn’t work
// on mobile, threshold might be better at 50%
// - add app icon for projects
// ParticleJS

// Clean up JSON

// Last steps:
// Clean up
// Hide navigation paths