import React, { useEffect, useState } from 'react';
import { Mail, Phone, Home, Linkedin, Github, Globe, Sun, Moon, Download } from 'lucide-react';
import resumeData from '../data/resume';

type ContactLink = {
  icon: React.ComponentType<any>;
  text: string;
  href?: string;
};

type Skill = {
  name: string;
  level: string; // "90%" etc.
};

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
};

type Education = {
  degree: string;
  institution: string;
  years: string;
};

type ResumeProps = {
  data?: {
    name?: string;
    title?: string;
    contacts?: ContactLink[];
    summary?: string;
    experience?: Experience[];
    skills?: {
      category: string;
      items: Skill[];
    }[];
    education?: Education[];
  };
};

export default function Resume({ data = resumeData }: ResumeProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
    } catch (e) {
      // ignore
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  const IconLink = ({ icon: Icon, text, href }: { icon: React.ComponentType<any>; text: string; href?: string }) => (
    <a
      href={href || '#'}
      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
    >
      <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
      <span className="text-sm break-words">{text}</span>
    </a>
  );

  const SkillRow = ({ name, level }: Skill) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{name}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{level}</p>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500" style={{ width: level }} />
      </div>
    </div>
  );

  const ExperienceItem = ({ exp }: { exp: Experience }) => (
    <div className="mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.role}</h3>
          <p className="text-md font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-right min-w-[120px]">{exp.duration}</p>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{exp.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {exp.technologies.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-mono px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  const handlePrint = () => {
    // Use window.print() so the print-specific CSS is applied and user can save as PDF.
    window.print();
  };

  // Build contact links using lucide icons
  const contacts: ContactLink[] = [
    { icon: Mail, text: data.contacts?.[0]?.text || 'email', href: data.contacts?.[0]?.href },
    { icon: Phone, text: data.contacts?.[1]?.text || 'phone', href: data.contacts?.[1]?.href },
    { icon: Home, text: data.contacts?.[2]?.text || 'location', href: data.contacts?.[2]?.href },
    { icon: Linkedin, text: data.contacts?.[3]?.text || 'linkedin', href: data.contacts?.[3]?.href },
    { icon: Github, text: data.contacts?.[4]?.text || 'github', href: data.contacts?.[4]?.href },
    { icon: Globe, text: data.contacts?.[5]?.text || 'website', href: data.contacts?.[5]?.href },
  ];

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden transition-colors duration-300 print:shadow-none">
        <header className="bg-gray-800 dark:bg-gray-900 text-white p-8 text-center relative print:bg-white print:text-black">
          <div className="absolute right-4 top-4 flex gap-2 print:hidden">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setIsDark((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-200"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-gray-200" />}
            </button>
            <button
              aria-label="Print / Save as PDF"
              onClick={handlePrint}
              className="inline-flex items-center justify-center p-2 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-200"
              title="Print / Save as PDF"
            >
              <Download className="h-5 w-5 text-gray-200" />
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">{data.name}</h1>
          <p className="text-lg md:text-xl text-blue-300 mt-2">{data.title}</p>
        </header>

        <div className="p-8">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700 print:border-b-0">
            {contacts.map((c, i) => (
              <IconLink key={i} icon={c.icon} text={c.text} href={c.href} />
            ))}
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-blue-600 pb-2 mb-4">
                  Professional Summary
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{data.summary}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-blue-600 pb-2 mb-4">
                  Experience
                </h2>
                {data.experience?.map((exp, i) => (
                  <ExperienceItem key={i} exp={exp} />
                ))}
              </section>
            </div>

            <div className="lg:col-span-1">
              <section className="mb-8 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg transition-colors duration-300 print:bg-transparent print:p-0 print:rounded-none">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-blue-600 pb-2 mb-4">Skills</h2>
                {data.skills?.map((cat, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mt-4 mb-2">{cat.category}</h4>
                    {cat.items.map((s, i) => (
                      <SkillRow key={i} name={s.name} level={s.level} />
                    ))}
                  </div>
                ))}
              </section>

              <section className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg transition-colors duration-300 print:bg-transparent print:p-0 print:rounded-none">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-blue-600 pb-2 mb-4">Education</h2>
                {data.education?.map((ed, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100">{ed.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{ed.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{ed.years}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}