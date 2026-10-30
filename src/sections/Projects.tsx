import type { PointerEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { Section, SectionHeading } from '../components/SectionHeading'
import { projects, type Project } from '../data/portfolio'

// Feeds the cursor position to the card's spotlight gradient.
function trackPointer(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`)
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      onPointerMove={trackPointer}
      className="group relative flex h-full flex-col gap-3.5 overflow-hidden rounded-[10px] border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(380px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 70%)',
        }}
      />
      <div className="flex flex-wrap justify-between gap-2 font-mono text-sm">
        <span className="text-faint">
          McDonaldMusimwa / <span className="font-semibold text-accent">{project.repo}</span>
        </span>
        <span className="rounded-full border border-line-strong px-2.5 text-xs leading-5 text-faint">
          {project.featured ? 'featured · ' : ''}
          {project.kind}
        </span>
      </div>
      <h3 className="text-2xl font-bold">{project.title}</h3>
      <p className="leading-relaxed text-muted">{project.description}</p>
      <pre className="relative overflow-x-auto rounded-md border border-line bg-bg px-3.5 py-3 font-mono text-[13px] leading-[1.8]">
        {project.meta.map(([key, value]) => (
          <div key={key}>
            <span className="text-accent">{key}</span>: {value}
          </div>
        ))}
      </pre>
      <div className="relative mt-auto flex gap-5 font-mono text-sm">
        {project.links.map((link) => (
          <a key={link.label} href={link.href} className="py-2">
            {link.label} ↗
          </a>
        ))}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading command="cat" target="projects.yaml" title="Repos I've built and shipped" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.repo} delay={(i % 2) * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
