import { useState, FormEvent, ChangeEvent } from 'react'
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react'

import { EMAIL, PHONE, LINKEDIN, GITHUB } from '@/data/contact'

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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can collaborate on your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you're looking for a 
                fullstack developer, need consultation on technical architecture, or want to discuss a potential 
                collaboration, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="text-blue-600 group-hover:text-white" size={20} />
                </div>
                <div>
                  <div className="font-medium text-slate-900">
                    Email
                  </div>
                  <div className="text-slate-600 text-sm">
                    {EMAIL}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-emerald-600" size={20} />
                </div>
                <div>
                  <div className="font-medium text-slate-900">
                    Phone
                  </div>
                  <div className="text-slate-600 text-sm">
                    {PHONE}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-purple-600" size={20} />
                </div>
                <div>
                  <div className="font-medium text-slate-900">
                    Location
                  </div>
                  <div className="text-slate-600 text-sm">
                    Oaxaca, Mexico
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-600 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-vertical"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
