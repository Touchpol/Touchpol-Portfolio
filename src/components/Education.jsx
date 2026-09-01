import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      title: "Junior Software Development Bootcamp (Batch 13)",
      school: "Generation Thailand",
      period: "30 Jun 2026 - Present",
      desc: "An intensive full-stack program focusing on the MERN stack (MongoDB, Express.js, React, Node.js), API integration, and collaborative Agile/Scrum workflows.",
      status: "Current"
    },
    {
      title: "Bachelor of Laws (LL.B.)",
      school: "Kasetsart University",
      period: "13 Jul 2020 - 1 Apr 2024",
      desc: "Built a strong foundation in logical reasoning, systematic analysis, and precise interpretation—critical problem-solving skills seamlessly applied to coding and debugging.",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50 font-sans">
      {/* ใช้ฟอนต์ Plus Jakarta Sans เพื่อความโมเดิร์น เป็นธรรมชาติ และไม่ดูเป็น AI สำเร็จรูป */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Education</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline/Cards List */}
        <div className="space-y-8">
          {education.map((edu, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col sm:flex-row items-start gap-8 p-8 md:p-10 bg-white rounded-3xl shadow-md border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <GraduationCap size={28} />
              </div>

              {/* Content Container */}
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                  <h3 className="font-extrabold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                    {edu.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider ${
                      edu.status === 'Current' 
                        ? 'bg-emerald-100 text-emerald-800 animate-pulse' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {edu.status}
                    </span>
                    <span className="text-blue-800 font-bold text-xs px-3.5 py-1.5 bg-blue-100/70 rounded-full tracking-wide">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-blue-600 font-semibold text-base mb-4">{edu.school}</p>
                <p className="text-slate-700 text-base leading-relaxed font-normal">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;