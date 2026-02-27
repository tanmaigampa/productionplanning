import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  GitBranch,
  BarChart3,
  ArrowRight,
  Wheat,
  Factory,
  FlaskConical,
  Package,
  ChevronRight,
  Zap,
} from 'lucide-react';

const FEATURES = [
  {
    icon: GitBranch,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10 border-sky-500/20',
    title: 'Two-Stage Pipeline',
    desc: 'Commit first-stage decisions, then adapt each scenario with full recourse optimization.',
  },
  {
    icon: BarChart3,
    color: 'text-teal-400',
    bg: 'bg-teal-500/10 border-teal-500/20',
    title: 'Scenario Modelling',
    desc: 'Build probability-weighted scenarios and stress-test your plan against every outcome.',
  },
  {
    icon: TrendingUp,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    title: 'Profit Maximization',
    desc: 'Linear-programming solver maximizes expected profit while respecting all operational constraints.',
  },
];

const SECTORS = [
  { icon: Wheat, label: 'Agriculture', sub: 'Weather-driven crop planning', active: true },
  { icon: Factory, label: 'Manufacturing', sub: 'Demand-driven production', active: false },
  { icon: FlaskConical, label: 'Pharma', sub: 'Quality risk management', active: false },
  { icon: Package, label: 'Food & Beverage', sub: 'Perishable production', active: false },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const sectorsRef = useRef<HTMLDivElement>(null);

  const scrollToSectors = () => {
    sectorsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#0f1117] dot-grid text-slate-200">

      {/* ── Navbar ── */}
      <header className="border-b border-[#2a3348] bg-[#0f1117]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="px-8 lg:px-16 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center shadow-glow-sky">
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white">Quantix</span>
              <span className="ml-2 text-xs text-slate-500 font-mono uppercase tracking-widest">v1.0</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-8 lg:px-16 py-20 space-y-28">

        {/* ── Hero ── */}
        <section className="text-center animate-slide-up">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 mt-12">
            Plan with Confidence.<br />
            <span className="text-sky-400">Execute with Precision.</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            A next-generation optimization that models uncertainty and prepares your production strategy for every scenario
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToSectors}
              className="btn-primary text-base px-7 py-3 animate-pulse-glow"
            >
              Select Sector <ArrowRight size={16} />
            </button>
          </div>

          {/* Quick stats row */}
          <div className="mt-16 grid grid-cols-3 gap-px bg-[#2a3348] rounded-xl overflow-hidden max-w-xl mx-auto border border-[#2a3348]">
            {[
              { label: 'Solver', value: 'PuLP / CBC' },
              { label: 'Method', value: '2-Stage SP' },
              { label: 'Sectors', value: '4 (1 Active)' },
            ].map(s => (
              <div key={s.label} className="bg-[#181d27] px-6 py-4 text-center">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">{s.label}</p>
                <p className="text-sm font-semibold text-white font-mono">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">How It Works</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Three core capabilities that power every optimization run.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} className="card group hover:border-sky-500/30 transition-all duration-300">
                <div className={`w-11 h-11 rounded-lg border flex items-center justify-center mb-5 ${bg}`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sectors ── */}
        <section ref={sectorsRef}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Supported Sectors</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map(({ icon: Icon, label, sub, active }) => (
              <button
                key={label}
                onClick={() => active && navigate('/agriculture')}
                disabled={!active}
                className={`card flex flex-col items-center text-center group transition-all duration-300 ${active
                  ? 'cursor-pointer hover:border-sky-500/40 hover:shadow-glow-sky'
                  : 'opacity-50 cursor-not-allowed'
                  }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${active ? 'bg-sky-500/10 border border-sky-500/20' : 'bg-white/5 border border-white/10'}`}>
                  <Icon size={20} className={active ? 'text-sky-400' : 'text-slate-500'} />
                </div>
                <p className="font-bold text-sm text-white mb-1">{label}</p>
                <p className={`text-xs ${active ? 'text-teal-400' : 'text-slate-500'}`}>{sub}</p>

                <div className={`mt-4 flex items-center gap-1 text-xs font-semibold ${active ? 'text-sky-400' : 'text-slate-500'}`}>
                  {active ? 'Open' : 'Coming soon'} <ChevronRight size={13} />
                </div>
              </button>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#2a3348] mt-10 py-8">
        <p className="text-center text-xs text-slate-600 font-mono">
          Quantix · Two-Stage Stochastic Production Planning · API at{' '}
          <a href="http://localhost:8000/docs" className="text-sky-600 hover:text-sky-400 transition-colors">localhost:8000/docs</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
