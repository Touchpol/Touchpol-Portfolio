import React from 'react';

const Skills = () => {
  const categories = [
    { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)"] },
    { title: "Backend", items: ["Node.js", "Express.js", "Python"] },
    { title: "Database", items: ["PostgreSQL", "MongoDB", "Supabase"] },
    { title: "Tools", items: ["Git/GitHub", "Agile/Scrum", "Figma", "Postman"] }
  ];

  return (
    <section id="skills" className="py-24 bg-white font-sans relative overflow-hidden">
      {/* ใช้ฟอนต์ Plus Jakarta Sans พิมพ์นิยมแต่ดูเป็นธรรมชาติ คุมธีมให้สอดคล้องกับทุกหน้า 
        พร้อมทั้งขยายขนาดตัวอักษรให้อ่านง่ายและดูโดดเด่นยิ่งขึ้น
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Tech Stack</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5">
              <h3 className="font-extrabold text-blue-600 text-xs uppercase tracking-widest">{cat.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map(item => (
                  <span key={item} className="px-3.5 py-2 bg-white text-slate-800 rounded-xl text-sm font-bold shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;