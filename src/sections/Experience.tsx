import { Reveal } from '../components/Reveal'
import { Section, SectionHeading } from '../components/SectionHeading'
import { jobs, type Job } from '../data/portfolio'

function Commit({ job, last }: { job: Job; last: boolean }) {
  return (
    <Reveal as="li" className="flex gap-5">
      <div className="flex w-5 shrink-0 flex-col items-center" aria-hidden="true">
        <span className={`text-xl leading-[1.4] font-extrabold ${job.head ? 'text-accent' : 'text-soft'}`}>*</span>
        {!last && <span className={`w-0.5 grow ${job.head ? 'bg-accent' : 'bg-line-strong'}`} />}
      </div>
      <div className={`flex min-w-0 flex-1 flex-col gap-2.5 ${last ? '' : 'pb-10'}`}>
        <div className="flex flex-wrap items-center gap-2 text-[13px]">
          {job.head && <span className="rounded bg-accent px-2 py-0.5 font-semibold text-bg">HEAD → main</span>}
          <span
            className={`rounded border px-2 py-px ${job.head ? 'border-accent text-accent' : 'border-dim text-soft'}`}
          >
            tag: {job.tag}
          </span>
          <span className="text-faint">{job.period}</span>
        </div>
        <h3 className="font-sans text-[22px] font-bold">{job.title}</h3>
        {job.bullets.length > 0 && (
          <ul className="flex max-w-205 list-disc flex-col gap-1.5 pl-4.5 text-sm leading-[1.7] text-muted">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  )
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading command="git log --graph" target="experience" title="Commit history" />
      <ol className="flex flex-col font-mono">
        {jobs.map((job, i) => (
          <Commit key={job.tag} job={job} last={i === jobs.length - 1} />
        ))}
      </ol>
    </Section>
  )
}
