import { useState } from 'react';
import { Phone, Link2 as LinkIcon, MapPin, MessageCircle, Send, Check } from 'lucide-react';
import { business, services } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const text = [
      `Olá, ${business.name}! Sou ${form.name}.`,
      form.service ? `Gostaria de agendar: ${form.service}.` : 'Gostaria de agendar um horário.',
      form.message ? `Detalhes: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join(' ');
    window.open(`${business.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const channels = [
    { icon: Phone, label: 'Telefone / WhatsApp', value: business.phoneDisplay, href: business.whatsapp },
    { icon: LinkIcon, label: 'Redes / Links', value: business.linksLabel, href: business.links },
    { icon: MapPin, label: 'Endereço', value: business.addressShort, href: business.maps },
  ];

  return (
    <section id="contato" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Contato</span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                Reserve o seu horário
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-sand">
                Fale com a gente pelo WhatsApp e garanta o seu atendimento. Será um prazer receber você
                em {business.neighborhood}.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-3">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-gold-500/30"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-espresso-950">
                      <c.icon size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-muted">{c.label}</span>
                      <span className="block truncate font-semibold text-cream">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="card p-7 sm:p-8" noValidate>
              <h3 className="font-display text-xl font-semibold text-cream">Pedido de agendamento</h3>
              <p className="mt-1 text-sm text-muted">
                Preencha e enviaremos você direto para o nosso WhatsApp.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-cream">
                    Nome <span className="text-gold-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-white/10 bg-espresso-900/70 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-muted focus:border-gold-500 focus:ring-4 focus:ring-gold-500/15"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-cream">
                    Serviço de interesse
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update('service')}
                    className="w-full rounded-xl border border-white/10 bg-espresso-900/70 px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold-500 focus:ring-4 focus:ring-gold-500/15"
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
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-cream">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Conte o melhor dia e horário para você"
                    className="w-full resize-none rounded-xl border border-white/10 bg-espresso-900/70 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-muted focus:border-gold-500 focus:ring-4 focus:ring-gold-500/15"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  {sent ? (
                    <>
                      <Check size={18} /> Redirecionando…
                    </>
                  ) : (
                    <>
                      <Send size={17} /> Enviar pelo WhatsApp
                    </>
                  )}
                </button>

                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-200"
                >
                  <MessageCircle size={16} /> Prefiro chamar direto no WhatsApp
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
