import React from 'react';
import { Mail, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50/50 font-sans">
      {/* 
        แชร์ฟอนต์ Plus Jakarta Sans พิมพ์นิยมแต่ดูเป็นธรรมชาติ คุมธีมให้กลมกลืนกับทุกส่วนในพอร์ตโฟลิโอ 
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      {/* Parallax Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Badge Intro */}
        <span className="inline-block px-5 py-2 rounded-full bg-blue-100/70 text-blue-800 text-xs font-extrabold mb-6 tracking-wider shadow-sm">
          GENERATION THAILAND • JUNIOR SOFTWARE DEVELOPER
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-600">Touch.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Junior Full Stack Developer ผู้เปลี่ยนความละเอียดจากสายกฎหมาย (LL.B.) 
          สู่การสร้าง Web Applications ที่มีประสิทธิภาพด้วย MERN Stack
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-14">
          <a href="https://github.com/Touchpol" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-2xl bg-white border border-slate-200/80 text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all">
            <Github size={20}/>
          </a>
          <a href="https://www.linkedin.com/in/touchpol-l-250b8640b/" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-2xl bg-white border border-slate-200/80 text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all">
            <Linkedin size={20}/>
          </a>
          <a href="mailto:touchpol2003@gmail.com" className="p-3.5 rounded-2xl bg-white border border-slate-200/80 text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all">
            <Mail size={20}/>
          </a>
        </div>

        {/* Scroll Down Arrow */}
        <a href="#projects" className="animate-bounce inline-flex p-4 rounded-full bg-slate-900 text-white shadow-xl hover:bg-blue-600 transition-colors">
          <ArrowDown size={20} />
        </a>

      </div>
    </section>
  );
};

export default Hero;