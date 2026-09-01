import React, { useState } from 'react';
import { Scale, BookOpen, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

// นำเข้ารูปภาพสำหรับ Legal Intern
import court1 from '../assets/IMG_2001.jpg';
import court2 from '../assets/IMG_2002.jpg';
import court3 from '../assets/IMG_2003.jpg';

// นำเข้ารูปภาพสำหรับ Social Studies Tutor
import tutor1 from '../assets/IMG_1001.jpg';
import tutor2 from '../assets/IMG_1002.jpg';
import tutor3 from '../assets/IMG_1003.jpg';

const Experience = () => {
  const [currentIndices, setCurrentIndices] = useState({ 1: 0, 2: 0 });

  const experiences = [
    {
      id: 0,
      title: "Research Assistant (ETDA Legal Project)",
      company: "University of the Thai Chamber of Commerce (UTCC)",
      period: "12 Dec 2025 - 9 Jul 2026",
      advisor: "Asst. Prof. Dr. Pakorn Winyuhuttakit (Project Manager & Researcher)",
      desc: "Conducted analytical research to analyze and provide legal proposals regarding the challenges arising from automated contracts, submitted to the Electronic Transactions Development Agency (ETDA).",
      icon: <FileText className="text-blue-600" size={24} />,
      highlight: true
    },
    {
      id: 1,
      title: "Legal Intern",
      company: "Samut Prakan Provincial Court",
      period: "24 Apr - 23 Jun 2023",
      advisor: "",
      desc: "Gained hands-on legal experience within the justice system, cultivating meticulous attention to detail, precision, and systematic workflow adherence.",
      icon: <Scale className="text-blue-600" size={24} />,
      highlight: false,
      images: [court1, court2, court3]
    },
    {
      id: 2,
      title: "Social Studies Tutor",
      company: "LittleSpace Tutoring",
      period: "20 Nov 2022 - 13 Feb 2024",
      advisor: "",
      desc: "Broke down complex concepts into structured, logical frameworks—a systematic mindset later applied directly to code architecture and problem-solving.",
      icon: <BookOpen className="text-blue-600" size={24} />,
      highlight: false,
      images: [tutor1, tutor2, tutor3]
    }
  ];

  const handleNext = (expId, length, e) => {
    e.stopPropagation();
    setCurrentIndices(prev => ({
      ...prev,
      [expId]: (prev[expId] + 1) % length
    }));
  };

  const handlePrev = (expId, length, e) => {
    e.stopPropagation();
    setCurrentIndices(prev => ({
      ...prev,
      [expId]: (prev[expId] - 1 + length) % length
    }));
  };

  const handleDotClick = (expId, index, e) => {
    e.stopPropagation();
    setCurrentIndices(prev => ({
      ...prev,
      [expId]: index
    }));
  };

  return (
    <section id="experience" className="py-24 bg-slate-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-14 text-center text-slate-900 tracking-tight">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => {
            const activeIndex = currentIndices[exp.id] || 0;
            return (
              <div 
                key={exp.id} 
                className={`flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-3xl transition-all duration-300 ${
                  exp.highlight 
                    ? 'bg-gradient-to-br from-blue-50/90 via-white to-white border-2 border-blue-200 shadow-xl shadow-blue-50/50' 
                    : 'bg-white border border-slate-100 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex md:flex-col items-start justify-between md:justify-start min-w-[180px]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-3 rounded-2xl ${exp.highlight ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-blue-50 text-blue-600'}`}>
                      {React.cloneElement(exp.icon, { className: exp.highlight ? 'text-white' : 'text-blue-600', size: 28 })}
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 bg-blue-100/70 text-blue-800 rounded-full tracking-wide">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-extrabold text-2xl text-slate-900 tracking-tight">{exp.title}</h3>
                    {exp.highlight && (
                      <span className="bg-blue-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                        Key Project
                      </span>
                    )}
                  </div>
                  <p className="text-blue-600 font-semibold text-base mb-4">{exp.company}</p>
                  
                  {exp.advisor && (
                    <div className="mb-4 p-4 bg-blue-50/80 border-l-4 border-blue-600 rounded-r-2xl text-sm text-slate-700">
                      <span className="font-bold text-blue-900">Project Advisor:</span> {exp.advisor}
                    </div>
                  )}
                  
                  <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">{exp.desc}</p>

                  {exp.images && (
                    <div className="mt-4 relative group rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 max-w-md aspect-[4/3] shadow-inner">
                      <img 
                        src={exp.images[activeIndex]} 
                        alt={`${exp.title} snapshot ${activeIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                      />

                      <button 
                        onClick={(e) => handlePrev(exp.id, exp.images.length, e)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={(e) => handleNext(exp.id, exp.images.length, e)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                        aria-label="Next slide"
                      >
                        <ChevronRight size={20} />
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                        {exp.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => handleDotClick(exp.id, idx, e)}
                            className={`h-2 rounded-full transition-all ${
                              activeIndex === idx ? 'bg-white w-5' : 'bg-white/50 hover:bg-white/80 w-2'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;