import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white font-sans text-center">
      {/* 
        แชร์ฟอนต์ Plus Jakarta Sans พิมพ์นิยมแต่ดูเป็นธรรมชาติ คุมธีมพอร์ตโฟลิโอให้สวยเนียนตาเป็นหนึ่งเดียวกัน
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-bold text-slate-500">
          © {new Date().getFullYear()} Touchpol L. • Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;