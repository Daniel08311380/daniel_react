import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Loading from './components/Loading';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Loading onLoadingComplete={handleLoadingComplete} />
      <Header />
      <main className="main-content">
        <Hero isLoading={isLoading} />
        <About />
        <Skills />
        <Timeline />
        <Testimonials />
        <Interests />
        <Contact />
      </main>
    </div>
  );
}

export default App;
