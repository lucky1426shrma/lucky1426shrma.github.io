import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { CompetitiveBento } from './components/CompetitiveBento';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <Navbar />

      <main>
        <Hero />
        <ProjectsSection />
        <CompetitiveBento />
        <SkillsSection />
        <ExperienceEducation />
      </main>

      <ContactFooter />
    </div>
  );
};

export default App;
