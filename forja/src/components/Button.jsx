import { Link } from 'react-router-dom'

const base =
  'group inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] ' +
  'transition-all duration-300 ease-out select-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'

const sizes = {
  md: 'px-6 py-3.5',
  sm: 'px-4 py-2.5 text-[11px]',
}

const variants = {
  // Sólido com gradiente de fogo
  primary:
    'text-ink-900 font-bold rounded-sm bg-gradient-to-br from-ember-200 via-ember-400 to-ember-600 ' +
    'hover:shadow-ember hover:-translate-y-0.5 active:translate-y-0',
  // Contorno hairline
  ghost:
    'text-bone rounded-sm border border-white/15 hover:border-ember-400/70 hover:text-ember-200 ' +
    'hover:-translate-y-0.5 active:translate-y-0',
}

function Inner({ children, arrow }) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      )}
    </>
  )
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  to,
  className = '',
  ...props
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        <Inner arrow={arrow}>{children}</Inner>
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer" {...props}>
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    )
  }
  return (
    <button className={cls} {...props}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  )
}
