import { useState } from 'react';
import { MessageCircle, Instagram, MapPin, Send, Check } from 'lucide-react';
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
      form.service ? `Gostaria de agendar: ${form.service}.` : 'Gostaria de agendar uma avaliação.',
      form.message ? `Detalhes: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join(' ');
    window.open(`${business.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const channels = [
    { icon: MessageCircle, label: 'WhatsApp', value: business.phoneDisplay, href: business.whatsapp },
    { icon: Instagram, label: 'Instagram', value: business.instagramHandle, href: business.instagram },
    { icon: MapPin, label: 'Endereço', value: business.addressShort, href: business.maps },
  ];

  return (
    <section id="contato" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Contato</span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Agende a sua avaliação
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone">
                Fale com a gente pelo WhatsApp e reserve o seu horário. Será um prazer receber você
                na {business.neighborhood}.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-3">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 60}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-cream-300 bg-cream-50/80 p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-sage-400 hover:shadow-soft-lg"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-200 text-sage-600 transition-colors group-hover:bg-sage-600 group-hover:text-cream-50">
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
                Preencha e enviaremos você direto para o nosso WhatsApp.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                    Nome <span className="text-sage-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-sage-500 focus:ring-4 focus:ring-sage-500/15"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                    Tratamento de interesse
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update('service')}
                    className="w-full rounded-xl border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-sage-500 focus:ring-4 focus:ring-sage-500/15"
                  >
                    <option value="">Selecione um tratamento</option>
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
                    className="w-full resize-none rounded-xl border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-sage-500 focus:ring-4 focus:ring-sage-500/15"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  {sent ? (
                    <>
                      <Check size={18} /> Abrindo o WhatsApp…
                    </>
                  ) : (
                    <>
                      <Send size={17} /> Enviar pelo WhatsApp
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
