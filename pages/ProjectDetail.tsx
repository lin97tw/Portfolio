import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { projectsData } from '../data';
import { FadeIn } from '../components/FadeIn';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <FadeIn>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-accent-400 mb-8 transition-colors font-mono text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Index
        </Link>
      </FadeIn>

      <FadeIn delay={0.1}>
        <header className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex gap-4 items-center mb-6 text-sm text-slate-400 font-mono">
            <span className="flex items-center gap-2">
               <Tag className="w-3 h-3" /> {project.category}
            </span>
            <span>|</span>
            <span className="flex items-center gap-2">
               <Calendar className="w-3 h-3" /> {project.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </header>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-lg font-mono text-accent-400 mb-4 uppercase tracking-wider">Overview</h2>
              <p className="text-slate-300 leading-8 text-lg">
                {project.overview}
              </p>
            </section>
          </FadeIn>

          {project.whatIDid && (
            <FadeIn delay={0.3}>
              <section>
                <h2 className="text-lg font-mono text-accent-400 mb-4 uppercase tracking-wider">What I Did</h2>
                <p className="text-slate-300 leading-8 text-lg">
                  {project.whatIDid}
                </p>
              </section>
            </FadeIn>
          )}

          {project.whatILearned && (
            <FadeIn delay={0.4}>
              <section>
                <h2 className="text-lg font-mono text-accent-400 mb-4 uppercase tracking-wider">What I Learned</h2>
                <div className="bg-slate-900/50 border-l-2 border-accent-500/50 p-6 rounded-r-lg">
                  <p className="text-slate-300 leading-7">
                    {project.whatILearned}
                  </p>
                </div>
              </section>
            </FadeIn>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <FadeIn delay={0.5}>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-32">
              <h3 className="font-bold text-white mb-4">Tech Stack</h3>
              <ul className="space-y-3">
                {project.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                    {tech}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-500 mb-2">PROJECT ID</div>
                <div className="text-sm font-mono text-white">{project.id.toUpperCase()}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};