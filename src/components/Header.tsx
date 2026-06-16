import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

import { EMAIL, LINKEDIN, GITHUB, MEDIUM, SUBSTACK } from '../data/contact'
import substack from '../assets/images/substack.png'
import medium from '../assets/images/medium.png'

interface NavigationProps {
  scrollToSection: (sectionID: string) => void;
}

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
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-200/60 selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <span className="text-base font-extrabold text-slate-900 tracking-tight">
              Jorge Castillo
            </span>
            {/* <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded">
              Architect
            </span> */}
          </div>

          <DesktopNavigation scrollToSection={scrollToSection} />
          <DesktopContactIcons />

          <button
            className="md:hidden text-slate-600 hover:text-slate-900 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && <MobileNavigation scrollToSection={scrollToSection} />}
      </div>
    </header>
  )
}

function DesktopNavigation({ scrollToSection }: NavigationProps) {
  const links = ['about', 'skills', 'experience', 'projects', 'contact'];
  
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {links.map((link) => (
        <button
          key={link}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 capitalize tracking-wide transition-colors cursor-pointer"
          onClick={() => scrollToSection(link)}
        >
          {link}
        </button>
      ))}
    </nav>
  );
}

function DesktopContactIcons() {
  return (
    <div className="hidden md:flex items-center space-x-3.5 border-l border-slate-200 pl-5">
      <a
        href={`mailto:${EMAIL}`}
        className="text-slate-400 hover:text-slate-900 transition-colors"
        title="Email Direct"
      >
        <Mail size={16} />
      </a>
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-slate-900 transition-colors"
        title="LinkedIn Profile"
      >
        <Linkedin size={16} />
      </a>
      <a
        href={SUBSTACK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center group"
        title="Substack Architecture Articles"
      >
        <img
          className="h-4 w-4 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
          src={substack}
          alt=""
          draggable="false"
        />
      </a>
      <a
        href={MEDIUM}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center group"
        title="Medium Documentation"
      >
        <img
          className="h-4 w-4 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
          src={medium}
          alt=""
          draggable="false"
        />
      </a>
      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-slate-900 transition-colors"
        title="GitHub Infrastructure Repos"
      >
        <Github size={16} />
      </a>
    </div>
  );
}

function MobileNavigation({ scrollToSection }: NavigationProps) {
  const links = ['about', 'skills', 'experience', 'projects', 'contact'];

  return (
    <div className="md:hidden py-4 border-t border-slate-100 animation-slide-down">
      <nav className="flex flex-col space-y-3.5">
        {links.map((link) => (
          <button 
            key={link}
            onClick={() => scrollToSection(link)}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 capitalize text-left py-0.5"
          >
            {link}
          </button>
        ))}

        <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
          <a
            href={`mailto:${EMAIL}`}
            className="text-slate-400 hover:text-slate-900 transition-colors"
            title="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={SUBSTACK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            title="Substack"
          >
            <img
              className="h-4 w-4 object-contain grayscale opacity-70"
              src={substack}
              alt=""
              draggable="false"
            />
          </a>
          <a
            href={MEDIUM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            title="Medium"
          >
            <img
              className="h-4 w-4 object-contain grayscale opacity-70"
              src={medium}
              alt=""
              draggable="false"
            />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </nav>
    </div>
  );
}
