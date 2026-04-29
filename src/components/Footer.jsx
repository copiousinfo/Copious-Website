export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
            <span className="text-slate-400 font-bold text-xs">C</span>
          </div>
          <span className="text-slate-400 text-sm">© {new Date().getFullYear()} Copious. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
