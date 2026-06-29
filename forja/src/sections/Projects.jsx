import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { ForjaIcon } from '../components/ForjaMark'
import { projects, PLACEHOLDER_SLOTS } from '../data/projects'

function ProjectCard({ project }) {
  const inner = (
    <div className="group relative overflow-hidden rounded-lg bg-ink-800 ring-1 ring-white/[0.08] transition-all duration-300 hover:ring-ember-400/40">
      <div className="aspect-[4/3] overflow-hidden bg-ink-700">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ash">
            {project.category}
            {project.year ? ` · ${project.year}` : ''}
          </p>
        </div>
        {project.url && <span className="text-ember-400 transition-transform group-hover:translate-x-1">↗</span>}
      </div>
    </div>
  )

  return project.url ? (
    <a href={project.url} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  )
}

function PlaceholderCard() {
  return (
    <div className="relative flex aspect-[4/3] flex-col items-center justify-center rounded-lg border border-dashed border-white/10 bg-ink-800/40">
      <ForjaIcon size={30} className="opacity-30" />
      <span className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-ash/50">
        Em breve
      </span>
    </div>
  )
}

export default function Projects() {
  const hasProjects = projects.length > 0
  const items = hasProjects
    ? projects
    : Array.from({ length: PLACEHOLDER_SLOTS }, (_, i) => ({ placeholder: true, id: i }))

  return (
    <section id="projetos" className="relative scroll-mt-24 border-t border-white/[0.06] py-28 md:py-36">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="Projetos"
          title="Forjados"
          accent="no fogo."
          description={
            hasProjects
              ? 'Uma seleção do que já saiu da bancada.'
              : 'Estamos preparando os cases para mostrar aqui. Quer ser o próximo?'
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id ?? item.title} delay={i * 90}>
              {item.placeholder ? <PlaceholderCard /> : <ProjectCard project={item} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
