import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800 mt-20 py-8 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm font-mono">
        <p>© {new Date().getFullYear()} Daniel Lin. All systems nominal.</p>
      </div>
    </footer>
  );
};