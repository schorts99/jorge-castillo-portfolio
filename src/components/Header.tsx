import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

import { EMAIL, LINKEDIN, GITHUB } from '../data/contact';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionID: string) => {
    const element = document.getElementById(sectionID)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-slate-900">
            Jorge Castillo
          </div>

          <DesktopNavigation scrollToSection={scrollToSection} />
          <DesktopContactIcons />

          <button
            className="md:hidden text-slate-600 hover:text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && <MobileNavigation scrollToSection={scrollToSection} />}
      </div>
    </header>
  )
}

function DesktopNavigation({ scrollToSection }: { scrollToSection: (sectionID: string) => void }) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <button
        className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        About
      </button>
      <button 
        onClick={() => scrollToSection('skills')}
        className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
      >
        Skills
      </button>
      <button 
        onClick={() => scrollToSection('experience')}
        className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
      >
        Experience
      </button>
      <button 
        onClick={() => scrollToSection('projects')}
        className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
      >
        Projects
      </button>
      <button 
        onClick={() => scrollToSection('contact')}
        className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
      >
        Contact
      </button>
    </nav>
  );
}

function MobileNavigation({ scrollToSection }: { scrollToSection: (sectionID: string) => void }) {
  return (
    <div className="md:hidden py-4">
      <nav className="flex flex-col space-y-4">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-slate-600 hover:text-blue-600 transition-colors text-left"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="text-slate-600 hover:text-blue-600 transition-colors text-left"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className="text-slate-600 hover:text-blue-600 transition-colors text-left"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-slate-600 hover:text-blue-600 transition-colors text-left"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-slate-600 hover:text-blue-600 transition-colors text-left"
        >
          Contact
        </button>
        
        <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
          <a
            href={`mailto:${EMAIL}`}
            className="text-slate-600 hover:text-blue-600 transition-colors"
            title="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 transition-colors"
            title="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </nav>
    </div>
  );
}

function DesktopContactIcons() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <a
        href={`mailto:${EMAIL}`}
        className="text-slate-600 hover:text-blue-600 transition-colors"
        title="Email"
      >
        <Mail size={20} />
      </a>
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-600 hover:text-blue-600 transition-colors"
        title="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-600 hover:text-blue-600 transition-colors"
        title="GitHub"
      >
        <Github size={20} />
      </a>
    </div>
  );
}
