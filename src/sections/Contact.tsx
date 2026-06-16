import { useState, FormEvent, ChangeEvent } from 'react'
import { Mail, Phone, Github, Linkedin, MapPin, Send, ArrowUpRight } from 'lucide-react'

import { EMAIL, PHONE, LINKEDIN, GITHUB, MEDIUM, SUBSTACK } from '@/data/contact'
import substack from '../assets/images/substack.png'
import medium from '../assets/images/medium.png'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (formEvent: FormEvent) => {
    formEvent.preventDefault()

    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi Jorge,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    )}`

    window.location.href = mailtoLink;
  };

  const handleInputChange = (changeEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [changeEvent.target.name]: changeEvent.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Initiate a Collaboration
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-normal">
            Whether you are looking to audit an existing platform architecture, introduce clean domain primitives, or scale up a team, let's talk strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Technical Consultation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                I assist engineering organizations in modernizing their architectural layers, moving towards bounded contexts, and configuring optimal developer workspaces. Drop a line to discuss roles, advisory positions, or project delivery goals.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/80 hover:border-slate-200 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Mail</div>
                  <div className="text-slate-700 text-sm font-medium truncate">{EMAIL}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Secure Comms</div>
                  <div className="text-slate-700 text-sm font-medium">{PHONE}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">HQ Location</div>
                  <div className="text-slate-700 text-sm font-medium">Oaxaca, Mexico</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Engineering Writing & Profiles
              </h4>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-200/60 text-slate-600 hover:text-blue-600 rounded-xl transition-all duration-200"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-50 hover:bg-slate-900 border border-slate-200/60 text-slate-600 hover:text-white rounded-xl transition-all duration-200"
                  title="GitHub Source Control"
                >
                  <Github size={18} />
                </a>

                <a
                  href={SUBSTACK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-orange-50/50 border border-slate-200/60 rounded-xl transition-all duration-200 group"
                  title="Substack Newsletter"
                >
                  <img className="h-4 w-4 object-contain grayscale group-hover:grayscale-0 transition-all" src={substack} alt="" />
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900">Substack</span>
                  <ArrowUpRight size={12} className="text-slate-400 group-hover:text-slate-600" />
                </a>

                <a
                  href={MEDIUM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-xl transition-all duration-200 group"
                  title="Medium Articles"
                >
                  <img className="h-4 w-4 object-contain grayscale group-hover:grayscale-0 transition-all" src={medium} alt="" />
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900">Medium</span>
                  <ArrowUpRight size={12} className="text-slate-400 group-hover:text-slate-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-50/70 border border-slate-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 tracking-tight">
              Send an Inbound Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all text-slate-800"
                    placeholder="Alex Mercer"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all text-slate-800"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Subject Context
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all text-slate-800"
                  placeholder="Architecture Review / Core Library Advisory"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Scope Outline
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all text-slate-800 resize-none"
                  placeholder="Outline your tech infrastructure goals or engineering role specifications..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl transition-all duration-200 font-semibold text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Send size={14} />
                Dispatch Mailto Router
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
