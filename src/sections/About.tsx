import { Fragment, type ReactNode } from 'react'
import { Key, Value } from '../components/Code'
import { Headshot } from '../components/Headshot'
import { Reveal } from '../components/Reveal'
import { about, engineer, profile } from '../data/portfolio'

const lines: ReactNode[] = [
  <span key="comment" className="text-faint italic">
    // 01 · about me
  </span>,
  <Fragment key="open">
    <span className="text-muted">const</span> engineer = {'{'}
  </Fragment>,
  ...Object.entries(engineer).map(([key, value]) => (
    <Fragment key={key}>
      {'  '}
      <Key>{key}</Key>: <Value value={value} />,
    </Fragment>
  )),
  '};',
  <Fragment key="export">
    <span className="text-muted">export default</span> engineer;
  </Fragment>,
]

export function About() {
  const youtube = profile.socials.find((s) => s.label === 'youtube')

  return (
    <section id="about" className="mx-auto max-w-310 px-4 py-18 sm:px-8 lg:px-12">
      <Reveal className="overflow-hidden rounded-[10px] border border-line bg-panel">
        <div className="flex flex-wrap justify-between gap-2 border-b border-line px-4.5 py-3 font-mono text-[13px] text-faint">
          <span>
            ~/portfolio/<span className="text-ink">about.ts</span>
          </span>
          <span>TypeScript</span>
        </div>
        <div className="grid lg:grid-cols-2">
          <pre className="overflow-x-auto border-line py-6 font-mono text-sm leading-[1.85] lg:border-r">
            {lines.map((line, i) => (
              <div key={i}>
                <span className="inline-block w-12 pr-5 text-right text-dim select-none">{i + 1}</span>
                {line}
              </div>
            ))}
          </pre>
          <div className="flex flex-col gap-4.5 px-5 py-8 sm:px-10">
            <Headshot />
            <h2 className="text-[34px] leading-tight font-bold">{about.title}</h2>
            <p className="text-[17px] leading-relaxed text-muted">{about.paragraphs[0]}</p>
            <p className="text-[17px] leading-relaxed text-muted">
              {about.paragraphs[1].replace('@mcdthedev.', '')}
              <a href={youtube?.href}>@mcdthedev</a>.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
