import React, { useState } from 'react';
import { Copy, Check, Mail, Phone, Sparkles, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "touchpol2003@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 font-sans relative overflow-hidden">
      {/* 
        แชร์ฟอนต์ Plus Jakarta Sans พิมพ์นิยมแต่ดูเป็นธรรมชาติ คุมธีมให้เหมือนกันทุกหน้า
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      {/* Background Decorative Gradient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        
        {/* Badge Intro */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles size={14} className="text-blue-600" />
          Let's Connect
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-slate-900 tracking-tight">
          Let's build something exceptional together.
        </h2>
        <p className="text-slate-700 text-lg md:text-xl mb-12 font-medium max-w-xl mx-auto leading-relaxed">
          Ready for Junior Developer roles and constantly eager to explore and master new technologies.
        </p>
        
        {/* Main Email Card */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-blue-50/50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all hover:border-blue-200">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
              <Mail size={26} />
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Email Me</p>
              <p className="font-extrabold text-slate-900 text-base md:text-xl tracking-tight truncate">{email}</p>
            </div>
          </div>
          
          <button 
            onClick={handleCopy}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-md shrink-0 ${
              copied 
                ? 'bg-emerald-500 text-white shadow-emerald-200' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 hover:shadow-lg'
            }`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied to Clipboard!' : 'Copy Email'}
          </button>
        </div>

        {/* Secondary Info & Socials */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-2.5 text-slate-800 font-bold text-base bg-white px-6 py-3.5 rounded-2xl shadow-sm border border-slate-100">
             <Phone size={18} className="text-blue-600" /> 
             <span>095-773-4065</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            {/* GitHub Button */}
            <a 
              href="https://github.com/Touchpol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-800 hover:text-blue-600 hover:border-blue-200 font-bold text-base transition-all shadow-sm border border-slate-100"
            >
              <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>
            
            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/touchpol-l-250b8640b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-800 hover:text-blue-600 hover:border-blue-200 font-bold text-base transition-all shadow-sm border border-slate-100"
            >
              <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;