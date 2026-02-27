import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wheat,
  Factory,
  FlaskConical,
  Package,
  ChevronRight,
  Zap,
} from 'lucide-react';

// ── Sector config ──
const SECTORS = [
  {
    icon: Wheat,
    label: 'Agriculture',
    sub: 'Weather-driven crop planning',
    active: true,
    route: '/agriculture',
    actionLabel: 'Open',
  },
  {
    icon: Factory,
    label: 'Manufacturing',
    sub: 'Demand-driven production',
    active: false,
    route: null,
    actionLabel: 'Coming Soon',
  },
  {
    icon: FlaskConical,
    label: 'Pharma',
    sub: 'Quality risk management',
    active: false,
    route: null,
    actionLabel: 'Coming Soon',
  },
  {
    icon: Package,
    label: 'Food & Beverage',
    sub: 'Perishable production',
    active: false,
    route: null,
    actionLabel: 'Coming Soon',
  },
];

// ──────────────────────────────────────────────
const Home: React.FC = () => {
  const navigate = useNavigate();
  const sectorsRef = useRef<HTMLDivElement>(null);

  const scrollToSectors = () =>
    sectorsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* ── Navbar ── */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center">
              <Zap size={15} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Quantix</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">

        {/* ── Hero ── */}
        <section className="min-h-[calc(100vh-65px)] flex flex-col items-center justify-center text-center animate-slide-up">

          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Plan with Confidence.<br />
            <span className="text-sky-600">Execute with Precision.</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            A next-generation optimization that models uncertainty and prepares your
            production strategy for every scenario.
          </p>

          <div className="flex justify-center">
            <button
              onClick={scrollToSectors}
              className="btn-primary text-base px-8 py-3"
            >
              Select Sector <ChevronRight size={16} />
            </button>
          </div>
        </section>

        {/* ── Sectors ── */}
        <section ref={sectorsRef} className="pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map(({ icon: Icon, label, sub, active, route, actionLabel }) => (
              <button
                key={label}
                onClick={() => active && route && navigate(route)}
                className="card text-left group transition-all duration-200 cursor-pointer hover:border-sky-400 hover:shadow-md"
              >
                {/* Icon — centered */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-50 border border-sky-200">
                    <Icon size={22} className="text-sky-600" />
                  </div>
                </div>

                {/* Text */}
                <p className="font-bold text-sm text-slate-900 mb-1 text-center">{label}</p>
                <p className="text-xs text-center text-teal-600 mb-4">{sub}</p>

                {/* Action row */}
                <div className="flex items-center gap-1 text-xs font-semibold justify-center text-sky-600 group-hover:text-sky-500">
                  {actionLabel} <ChevronRight size={13} />
                </div>
              </button>
            ))}
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 py-6 bg-white">
        <p className="text-center text-xs text-slate-400 font-mono">
          Quantix · Two-Stage Stochastic Production Planning
        </p>
      </footer>
    </div>
  );
};

export default Home;
