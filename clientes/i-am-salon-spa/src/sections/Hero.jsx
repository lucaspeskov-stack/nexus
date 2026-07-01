import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, ArrowRight } from 'lucide-react';
import { business, stats } from '../data/content.js';
import SmartImage from '../components/SmartImage.jsx';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* fundo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-plum-200/50 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-lav-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-plum-50/60 to-cream" />
      </div>

      <div className="container-x grid items-center gap-12 pb-16 md:grid-cols-2 md:pb-24">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MapPin size={14} /> {business.neighborhood} · {business.city}
          </motion.span>

          <motion.h1
            className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-plum-900 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Realce a sua <span className="text-gradient">melhor versão</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {business.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Calendar size={18} /> Agendar horário
            </a>
            <a href="#servicos" className="btn-ghost">
              Ver serviços <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-3 text-sm text-ink/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 shadow-soft">
              <Star size={16} className="text-amber-400" fill="currentColor" />
              <strong className="text-plum-900">{business.rating.toFixed(1)}</strong>
            </div>
            <span>
              <strong className="text-plum-900">{business.reviewsCount}</strong> avaliações no Google
            </span>
          </motion.div>
        </div>

        {/* imagem */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-md">
            <SmartImage
              src={business.photo}
              alt={`Ambiente do ${business.name} em Ipanema`}
              className="aspect-[3/4] w-full rounded-4xl shadow-soft-lg ring-1 ring-plum-100"
            />
            {/* card flutuante */}
            <div className="absolute -bottom-5 -left-5 hidden animate-float items-center gap-3 rounded-2xl bg-white/90 p-4 shadow-soft-lg backdrop-blur sm:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-plum-100 text-plum-700">
                <Star size={20} fill="currentColor" className="text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-plum-900">Excelência premiada</p>
                <p className="text-xs text-ink/60">{business.rating} ★ · {business.reviewsCount} avaliações</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* faixa de estatísticas */}
      <div className="container-x">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-plum-100 bg-white/70 p-6 shadow-soft backdrop-blur sm:gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-plum-800 sm:text-4xl">
                {s.value}
                <span className="text-plum-400">{s.suffix}</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/60 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
