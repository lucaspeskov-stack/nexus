import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, ArrowRight } from 'lucide-react';
import { business, gallery, stats } from '../data/content.js';
import SmartImage from '../components/SmartImage.jsx';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* fundo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-gold-700/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950 via-espresso-900 to-espresso-900" />
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
            className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Cabelo com <span className="text-gradient">assinatura</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg leading-relaxed text-sand"
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
            className="mt-8 flex items-center gap-3 text-sm text-sand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <Star size={16} className="text-gold-400" fill="currentColor" />
              <strong className="text-cream">{business.rating.toFixed(1)}</strong>
            </div>
            <span>
              <strong className="text-cream">{business.reviewsCount}</strong> avaliações no Google
            </span>
          </motion.div>
        </div>

        {/* imagem principal (foto do Google) */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-md">
            <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-500/20 to-transparent blur-xl" />
            <SmartImage
              src={gallery[0].src}
              alt={gallery[0].alt}
              className="aspect-[3/4] w-full rounded-4xl ring-1 ring-white/10"
            />
            <div className="absolute -bottom-5 -left-5 hidden animate-float items-center gap-3 rounded-2xl border border-white/10 bg-espresso-800/90 p-4 shadow-soft backdrop-blur sm:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                <Star size={20} fill="currentColor" className="text-gold-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-cream">Referência em Copacabana</p>
                <p className="text-xs text-muted">{business.rating} ★ · {business.reviewsCount} avaliações</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* faixa de estatísticas */}
      <div className="container-x">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-gold-300 sm:text-4xl">
                {s.value}
                <span className="text-gold-500">{s.suffix}</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
