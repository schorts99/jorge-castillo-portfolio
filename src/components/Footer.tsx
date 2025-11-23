import { Github, Linkedin, Mail, Heart } from 'lucide-react'

import { EMAIL, GITHUB, LINKEDIN, MEDIUM, SUBSTACK } from '../data/contact'
import substack from '../assets/images/substack.png'
import medium from '../assets/images/medium.png'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Jorge Castillo
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Software Engineer passionate about creating scalable, 
              efficient solutions that make a real impact.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Connect
            </h4>
            <div className="flex space-x-4 mb-4">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SUBSTACK}
                target="_blank"
                rel="noopener noreferrer"
                title="Substack"
                className="flex items-center px-1 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <img
                  className="h-7"
                  src={substack}
                  draggable="false"
                  style={{ filter: 'brightness(10)' }}
                />
              </a>
              <a
                href={MEDIUM}
                target="_blank"
                rel="noopener noreferrer"
                title="Medium"
                className="flex items-center px-1 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <img
                  className="h-7"
                  src={medium}
                  draggable="false"
                  style={{ filter: 'brightness(10) invert(1)' }}
                />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-slate-300 text-sm">
              {EMAIL}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500" size={16} /> by Jorge Castillo © 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
