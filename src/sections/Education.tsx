import { Key, Value } from '../components/Code'
import { ShieldCheckIcon } from '../components/icons'
import { Reveal } from '../components/Reveal'
import { Section, SectionHeading } from '../components/SectionHeading'
import { certification, degree } from '../data/portfolio'

export function Education() {
  const entries = Object.entries(degree)

  return (
    <Section id="education">
      <SectionHeading command="jq ." target="education.json" title="Degree and certification" />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <pre className="h-full overflow-x-auto rounded-[10px] border border-line bg-panel p-6 font-mono text-sm leading-[1.85]">
            <div>{'{'}</div>
            {entries.map(([key, value], i) => (
              <div key={key}>
                {'  '}
                <Key>"{key}"</Key>: <Value value={value} />
                {i < entries.length - 1 && ','}
              </div>
            ))}
            <div>{'}'}</div>
          </pre>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex h-full flex-col gap-3 rounded-[10px] border border-accent bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_-25px] hover:shadow-accent/60">
            <div className="flex items-center gap-2.5 font-mono text-[13px] text-accent">
              <ShieldCheckIcon className="size-4.5" />
              verified credential
            </div>
            <h3 className="text-2xl leading-tight font-bold">{certification.title}</h3>
            <p className="leading-relaxed text-muted">{certification.description}</p>
            <a href={certification.href} className="mt-auto py-2 font-mono text-sm">
              $ verify --credly ↗
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
