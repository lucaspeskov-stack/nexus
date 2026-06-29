import { useState } from 'react'
import { Phone, Instagram, MapPin, MessageCircle, Send, Check } from 'lucide-react'
import { BUSINESS, SERVICES, waLink } from '../data/content'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)

  const nameError = touched.name && form.name.trim().length < 2
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true })
    if (form.name.trim().length < 2) return

    const lines = [
      `Olá! Sou ${form.name.trim()} e vim pelo site do ${BUSINESS.name}.`,
      form.service && `Tenho interesse em: ${form.service}.`,
      form.message && `Mensagem: ${form.message.trim()}`,
      form.phone && `Meu contato: ${form.phone.trim()}`,
      'Gostaria de agendar um horário.',
    ].filter(Boolean)

    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contato" className="bg-cream py-20 sm:py-28">
      <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Lado esquerdo: informações */}
        <Reveal>
          <span className="eyebrow">
            <span className="gold-line" /> Contato
          </span>
          <h2 className="mt-4 text-3xl text-ink-900 sm:text-4xl lg:text-5xl">
            Vamos cuidar de você
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65">
            Agende pelo WhatsApp ou preencha o formulário — respondemos rapidinho para
            encontrar o melhor horário para você.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#1c9d63]/10 text-[#1c9d63]">
                <MessageCircle size={22} />
              </span>
              <div className="leading-tight">
                <p className="text-xs uppercase tracking-widest2 text-ink/50">WhatsApp</p>
                <p className="text-base font-semibold text-ink-900">{BUSINESS.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`tel:+${BUSINESS.phoneIntl}`}
              className="group flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rose-light text-rose-deep">
                <Phone size={20} />
              </span>
              <div className="leading-tight">
                <p className="text-xs uppercase tracking-widest2 text-ink/50">Telefone</p>
                <p className="text-base font-semibold text-ink-900">{BUSINESS.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mauve/20 text-mauve-deep">
                <Instagram size={20} />
              </span>
              <div className="leading-tight">
                <p className="text-xs uppercase tracking-widest2 text-ink/50">Instagram</p>
                <p className="text-base font-semibold text-ink-900">{BUSINESS.instagramHandle}</p>
              </div>
            </a>

            <a
              href={BUSINESS.googleDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rose-light text-rose-deep">
                <MapPin size={20} />
              </span>
              <div className="leading-tight">
                <p className="text-xs uppercase tracking-widest2 text-ink/50">Endereço</p>
                <p className="text-sm font-medium text-ink-900">{BUSINESS.addressShort}</p>
              </div>
            </a>
          </div>
        </Reveal>

        {/* Lado direito: formulário */}
        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-ink-900">Solicitar agendamento</h3>
            <p className="mt-1 text-sm text-ink/55">
              Enviaremos sua mensagem direto para o nosso WhatsApp.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-900">
                  Nome <span className="text-rose-deep">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={update('name')}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  placeholder="Seu nome"
                  className={`w-full rounded-xl border bg-cream-100 px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink/40 focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/30 ${
                    nameError ? 'border-rose-deep' : 'border-ink/15'
                  }`}
                  aria-invalid={nameError ? 'true' : 'false'}
                  aria-describedby={nameError ? 'name-error' : undefined}
                />
                {nameError && (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-rose-deep">
                    Por favor, informe seu nome para continuarmos.
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-900">
                  Telefone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="(21) 99999-9999"
                  className="w-full rounded-xl border border-ink/15 bg-cream-100 px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink/40 focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/30"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-900">
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={update('service')}
                  className="w-full rounded-xl border border-ink/15 bg-cream-100 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/30"
                >
                  <option value="">Selecione (opcional)</option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-900">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Conte um pouco do que você procura…"
                  className="w-full resize-none rounded-xl border border-ink/15 bg-cream-100 px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink/40 focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/30"
                />
              </div>
            </div>

            <button type="submit" className="btn-wa mt-6 w-full">
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
            <p className="mt-3 text-center text-xs text-ink/45">
              Ao enviar, você será direcionado para o WhatsApp com sua mensagem pronta.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
