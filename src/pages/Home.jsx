export default function Home() {
  return (
    <div className="relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
            <span className="flex w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-medium text-slate-300">v2.0 is now live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Build faster with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Modern Aesthetics
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Create stunning, performant landing pages in minutes. No complex configuration, 
            just raw power and beautiful defaults right out of the box.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/30">
              Start Building Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-slate-300 bg-slate-800/50 rounded-full border border-slate-700 hover:bg-slate-800 transition-all">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
