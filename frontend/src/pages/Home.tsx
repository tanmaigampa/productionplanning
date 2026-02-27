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
    iconBg: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
  {
    icon: Factory,
    label: 'Manufacturing',
    sub: 'Demand-driven production',
    active: false,
    route: null,
    actionLabel: 'Coming Soon',
    iconBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-700',
  },
  {
    icon: FlaskConical,
    label: 'Pharma',
    sub: 'Quality risk management',
    active: false,
    route: null,
    actionLabel: 'Coming Soon',
    iconBg: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
  },
  {
    icon: Package,
    label: 'Food & Beverage',
    sub: 'Perishable production',
    active: false,
    route: null,
    actionLabel: 'Coming Soon',
    iconBg: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-500',
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

      {/* ── Hero ── */}
      <section className="min-h-[calc(100vh-65px)] flex flex-col items-center justify-center text-center animate-slide-up gap-8 py-10">

        {/* Text + CTA — constrained width */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Plan with Confidence.<br />
            <span className="text-sky-600">Execute with Precision.</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            A next-generation optimization that models uncertainty and prepares your
            production strategy for every scenario.
          </p>

          <button
            onClick={scrollToSectors}
            className="btn-primary text-base px-8 py-3"
          >
            Select Sector <ChevronRight size={16} />
          </button>
        </div>

        {/* Illustration — full viewport width, bg matches page */}
        <div className="w-full bg-[#f8fafc]">
          <img
            src="/hero-illustration.png"
            alt="Professionals across industry sectors"
            className="w-full object-contain"
            style={{ maxHeight: '40vh' }}
          />
        </div>

      </section>

      <main className="max-w-6xl mx-auto px-6">

        {/* ── Sectors ── */}
        <section ref={sectorsRef} className="pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map(({ icon: Icon, label, sub, active, route, actionLabel, iconBg, iconColor }) => (
              <button
                key={label}
                onClick={() => active && route && navigate(route)}
                className="card group transition-all duration-200 cursor-pointer hover:border-slate-300 hover:shadow-md flex flex-col items-center py-8 px-6"
              >
                {/* Icon — centered */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-5 ${iconBg}`}>
                  <Icon size={26} className={iconColor} />
                </div>

                {/* Text */}
                <p className="font-bold text-base text-slate-900 mb-1.5 text-center">{label}</p>
                <p className="text-sm text-center text-slate-500 mb-5 leading-relaxed">{sub}</p>

                {/* Action row */}
                <div className="flex items-center gap-1 text-sm font-semibold justify-center text-sky-600 group-hover:text-sky-500 mt-auto">
                  {actionLabel} <ChevronRight size={14} />
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
