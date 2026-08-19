import React from 'react';

const ProjectCard = ({ title, desc, image, tags, link }) => (
  <div className="velocity-card overflow-hidden p-0 group border border-white/20 hover:border-purple-800/90 transition-all duration-300 bg-gray-200/6 ">
    {/* Image Section */}
    <div className="relative h-64 bg-zinc-900 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        {link && link !== "#" && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            Live Preview ↗
          </a>
        )}
      </div>
    </div>

    {/* Content Section */}
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
      
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Project Link (Alternative for Mobile) */}
        {link && link !== "#" && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-800 text-xs font-bold flex items-center gap-1 transition-colors"
          >
            Visit Site ↗
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;