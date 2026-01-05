import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Code2, Globe, Activity } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const Home: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      {/* Console Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left: Identity Panel */}
        <div className="lg:col-span-7 space-y-8">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent-500/50"></div>
              <span className="font-mono text-xs tracking-[0.2em] text-accent-400 uppercase">
                System Identification
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Student <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                Engineer
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed border-l-2 border-slate-800 pl-6">
              Focused on software, hardware, and AI-driven systems.
              I build projects to understand how things work — not just to make them run.
            </p>

            <div className="pt-8">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500/10 text-accent-400 border border-accent-500/20 rounded hover:bg-accent-500/20 hover:border-accent-500/40 transition-all font-mono text-sm"
              >
                ACCESS PROJECTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right: Status Panel (Console) */}
        <div className="lg:col-span-5 w-full">
          <FadeIn delay={0.3} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
             {/* Decorative grid bg */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <span className="font-mono text-xs text-slate-500 uppercase flex items-center gap-2">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  Status: Online
                </span>
                <span className="font-mono text-xs text-slate-600">v2.0.26</span>
              </div>

              <ul className="space-y-6">
                <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider">
                    <Code2 className="w-3 h-3" /> Primary Languages
                  </div>
                  <div className="text-slate-200 font-medium">Python, C++, Verilog, TypeScript</div>
                </li>
                
                <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider">
                    <Cpu className="w-3 h-3" /> Fields
                  </div>
                  <div className="text-slate-200 font-medium">AI, Robotics, Simulation, Web</div>
                </li>

                <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider">
                    <Globe className="w-3 h-3" /> Current Focus
                  </div>
                  <div className="text-accent-300 font-medium">Engineering Foundations</div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};