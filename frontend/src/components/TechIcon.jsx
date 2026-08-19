import React from 'react';

const TechIcon = ({ name, subtitle, icon, color }) => {
  return (
    <div className="velocity-card flex flex-col items-center justify-center text-center p-8 group cursor-default">
      <div 
        className="text-4xl mb-4 transition-all duration-300 group-hover:scale-125"
        style={{ color: color }}
      >
        <span className="filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">{icon}</span>
      </div>
      <h4 className="font-bold text-lg text-white group-hover:text-purple-400 transition-colors">
        {name}
      </h4>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mt-1 italic">
        {subtitle}
      </p>
    </div>
  );
};

export default TechIcon;