import { useState } from 'react'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'

import substack from '../assets/images/substack.png'
import medium from '../assets/images/medium.png'
import type { ChangeEvent, FormEvent } from 'react'
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  MEDIUM,
  PHONE,
  RAW_PHONE,
  SUBSTACK,
} from '@/data/contact'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (formEvent: FormEvent) => {
    formEvent.preventDefault()

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi Jorge,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`,
    )}`
  }

  const handleInputChange = (
    changeEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [changeEvent.target.name]: changeEvent.target.value,
    })
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Contact
          </span>
          <h2
            id="contact-title"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Have a good problem to solve?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            I’m happy to talk about a product, a technical challenge, or an
            opportunity to work together. Send a note and tell me what you’re
            building.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-7 lg:col-span-5">
            <div>
              <h3 className="mb-3 text-lg font-bold tracking-tight text-slate-950">
                Let’s start with a conversation.
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                Whether you need help shaping a system, improving an existing
                product, or bringing an idea to life, I’d like to hear what
                you’re working on.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex min-h-20 items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email
                  </div>
                  <div className="truncate text-sm font-medium text-slate-800">
                    {EMAIL}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${RAW_PHONE}`}
                className="group flex min-h-20 items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Phone size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone
                  </div>
                  <div className="text-sm font-medium text-slate-800">
                    {PHONE}
                  </div>
                </div>
              </a>

              <div className="flex min-h-20 items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                  <MapPin size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Based In
                  </div>
                  <div className="text-sm font-medium text-slate-800">
                    Oaxaca, Mexico
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-5">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                Elsewhere
              </h4>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200/80 text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  aria-label="Jorge on LinkedIn (opens in a new tab)"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200/80 text-slate-600 transition-colors hover:bg-slate-950 hover:text-white"
                  aria-label="Jorge on GitHub (opens in a new tab)"
                >
                  <Github size={18} aria-hidden="true" />
                </a>

                <a
                  href={SUBSTACK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200/80 px-3 py-1.5 transition-colors hover:bg-orange-50"
                  aria-label="Jorge on Substack (opens in a new tab)"
                >
                  <img
                    className="h-4 w-4 object-contain"
                    src={substack}
                    alt=""
                  />
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900">
                    Substack
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="text-slate-500"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={MEDIUM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200/80 px-3 py-1.5 transition-colors hover:bg-slate-100"
                  aria-label="Jorge on Medium (opens in a new tab)"
                >
                  <img className="h-4 w-4 object-contain" src={medium} alt="" />
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900">
                    Medium
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="text-slate-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-950">
              Write me a note
            </h3>
            <p className="mb-6 text-sm leading-6 text-slate-600">
              This opens your email app with a draft—your message isn’t sent
              from this website.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10"
                  placeholder="A few words about your message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10"
                  placeholder="What are you working on?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
              >
                <Send size={15} aria-hidden="true" />
                Open email draft
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
