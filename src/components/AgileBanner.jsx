import React from 'react';
import { Users, BookOpen, Clock } from 'lucide-react';

const AgileBanner = () => {
  return (
    <div className="bg-blue-600 py-16 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
        
        {/* Item 1: Transitioning Tech */}
        <div className="flex items-center gap-4">
          <Users size={40} className="opacity-50 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-xl tracking-tight">Transitioning Tech</h4>
            <p className="text-blue-200 text-sm">Leveraging Agile & People Management skills while mastering code.</p>
          </div>
        </div>

        {/* Item 2: Ex-Scrum Master */}
        <div className="flex items-center gap-4">
          <BookOpen size={40} className="opacity-50 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-xl tracking-tight">Ex-Scrum Master</h4>
            <p className="text-blue-200 text-sm">Experienced in Daily Standups, Retrospectives, & Team Collaboration.</p>
          </div>
        </div>

        {/* Item 3: Deep Understanding */}
        <div className="flex items-center gap-4">
          <Clock size={40} className="opacity-50 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-xl tracking-tight">Deep Understanding</h4>
            <p className="text-blue-200 text-sm">Taking time to thoroughly understand core concepts and build solid foundations.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgileBanner;