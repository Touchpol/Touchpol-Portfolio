import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';
import heroBanner from '../assets/hero-banner.png';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 font-sans relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Selected Projects</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-blue-50/50 border border-slate-100 grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center hover:border-blue-200 transition-all">
          
          <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-inner border border-slate-100">
            <img 
              src={heroBanner} 
              alt="Merchroom E-commerce Store" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div>
            <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest">E-commerce • Team Project</span>
            <h3 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4 text-slate-900">Merchroom</h3>
            <p className="text-slate-700 mb-6 leading-relaxed font-medium text-base md:text-lg">
              An independent e-commerce web store dedicated to international and local artist merchandise, featuring curated Thai heritage collections along with custom storefront catalogs and secure admin inventory management.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {['React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(t => (
                <span key={t} className="text-xs font-bold px-3 py-1.5 bg-blue-50 text-blue-700 rounded-xl border border-blue-100/60 uppercase">{t}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/WichayaR/JSD13-MERCHROOM-Group-Project" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-md transition-all"
              >
                <Github size={18}/> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;