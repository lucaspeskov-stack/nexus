import { useState } from 'react';
import { Phone, Instagram, MapPin, Send, Check } from 'lucide-react';
import { business, services } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    // Sem WhatsApp confirmado (telefone fixo): direciona para o Instagram para
    // concluir o agendamento por direct, e reforça o telefone para ligação.
    window.open(business.instagram, '_blank', 'noopener');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const channels = [
    { icon: Phone, label: 'Telefone', value: business.phoneDisplay, href: `tel:${business.phoneTel}` },
    { icon: Instagram, label: 'Instagram', value: business.instagramHandle, href: business.instagram },
    { icon: MapPin, label: 'Endereço', value: business.addressShort, href: business.maps },
  ];

  return (
    <section id="contato" className="relative py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sand-200 via-sand-100 to-sand-200" />
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Contato</span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Agende a sua visita
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone">
                Ligue para nós ou chame no direct do Instagram para reservar o seu horário. Teremos
                prazer em receber você em {business.neighborhood}.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-3">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 60}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('tel:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-sand-300 bg-sand-50/80 p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-bronze-400 hover:shadow-soft-lg"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand-200 text-bronze-600 transition-colors group-hover:bg-bronze-600 group-hover:text-sand-50">
                      <c.icon size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-stone">{c.label}</span>
                      <span className="block truncate font-semibold text-ink">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="card p-7 sm:p-8" noValidate>
              <h3 className="font-display text-xl font-semibold text-ink">Pedido de agendamento</h3>
              <p className="mt-1 text-sm text-stone">
                Preencha e continue no nosso Instagram para confirmar o horário.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                    Nome <span className="text-bronze-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-sand-300 bg-sand-50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-bronze-500 focus:ring-4 focus:ring-bronze-500/15"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                    Serviço de interesse
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update('service')}
                    className="w-full rounded-xl border border-sand-300 bg-sand-50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-bronze-500 focus:ring-4 focus:ring-bronze-500/15"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Conte o melhor dia e horário para você"
                    className="w-full resize-none rounded-xl border border-sand-300 bg-sand-50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-bronze-500 focus:ring-4 focus:ring-bronze-500/15"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  {sent ? (
                    <>
                      <Check size={18} /> Abrindo o Instagram…
                    </>
                  ) : (
                    <>
                      <Send size={17} /> Continuar no Instagram
                    </>
                  )}
                </button>

                <a
                  href={`tel:${business.phoneTel}`}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-bronze-700 hover:text-bronze-600"
                >
                  <Phone size={16} /> Prefiro ligar: {business.phoneDisplay}
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
