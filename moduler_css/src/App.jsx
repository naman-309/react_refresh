import { useState } from 'react'
import CardA from './components/CardA'
import CardB from './components/CardB'
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold">Module CSS</h1>
      <CardA />
      <CardB />
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">

        {/* 1. Header / Navbar */}
        <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ViteCraft
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="#docs" className="hover:text-cyan-400 transition-colors">Docs</a>
            </nav>
            <div>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-cyan-500/20">
                Get Started
              </button>
            </div>
          </div>
        </header>

        {/* 2. Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6 animate-pulse">
            🚀 Tailwind CSS is working perfectly!
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto mb-6 leading-tight">
            Build lightning fast interfaces with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Tailwind & Vite
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Say goodbye to messy CSS sheets. Write raw utility classes right inside your markup and instantly build stunning, responsive components.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-xl shadow-blue-500/20">
              Explore Documentation
            </button>
            <button className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-3 rounded-xl font-medium transition-colors">
              Live Sandbox
            </button>
          </div>

          {/* 3. Features Grid */}
          <section id="features" className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why you'll love it</h2>
              <p className="text-slate-400">Everything you need to deliver production-ready apps instantly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-left hover:border-cyan-500/40 transition-all group">
                <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant HMR</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Vite ensures hot module replacement keeps updates moving faster than the blink of an eye.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-left hover:border-blue-500/40 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  🎨
                </div>
                <h3 className="text-xl font-semibold mb-2">Utility First</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  No complex class hierarchies. Use straightforward helper names for colors, padding, and layout.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-left hover:border-indigo-500/40 transition-all group">
                <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  📱
                </div>
                <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Easily modify designs for mobile, tablet, and desktop views directly with mobile-first prefixes.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* 4. Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 mt-20 py-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} ViteCraft. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App


