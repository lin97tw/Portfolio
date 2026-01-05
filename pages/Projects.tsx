import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data';
import { FadeIn } from '../components/FadeIn';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Projects: React.FC = () => {
  return (
    <div className="py-10">
      <FadeIn>
        <div className="mb-16 max-w-2xl">
          <h2 className="font-mono text-accent-400 text-sm tracking-widest uppercase mb-4">
            / Project_Index
          </h2>
          <h1 className="text-4xl font-bold text-white mb-6">Selected Works</h1>
          <p className="text-slate-400 text-lg">
            A curated selection of engineering and programming projects, 
            documenting both results and the reasoning behind them.
          </p>
        </div>
      </FadeIn>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Link 
              to={`/project/${project.id}`}
              className="block group h-full"
            >
              <article className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 h-full transition-all duration-300 hover:border-accent-500/50 hover:bg-slate-800/50 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-accent-300 border border-slate-700">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-accent-400 transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs font-mono text-slate-500">
                      #{tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-mono text-slate-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};