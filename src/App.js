import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import LearningModules from './LearningModules';
import Quiz from './Quiz';
import PersonalizedDashboard from './PersonalizedDashboard';
import Footer from './Footer';
import './style.css';

function App() {
  const [currentModule, setCurrentModule] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <LearningModules setCurrentModule={setCurrentModule} />
        {currentModule && <Quiz module={currentModule} />}
        <PersonalizedDashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;