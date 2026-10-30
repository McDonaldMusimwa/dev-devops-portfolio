import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CheckIcon, QueuedIcon, RunningIcon } from '../components/icons'
import { Reveal } from '../components/Reveal'
import { ScrambleText, Typewriter } from '../components/TextEffects'
import { pipeline, profile, type PipelineStep } from '../data/portfolio'
import { prefersReducedMotion } from '../lib/motion'

type Status = PipelineStep['status']

// The pipeline "runs" up to the step marked running in the data, then stays there.
const stopAt = pipeline.findIndex((step) => step.status === 'running')

function statusAt(index: number, cursor: number): Status {
  if (index < cursor) return 'passed'
  if (index === cursor) return 'running'
  return 'queued'
}

type StepRowProps = {
  step: PipelineStep
  status: Status
  highlighted: boolean
  onHover: () => void
  rowRef: (el: HTMLLIElement | null) => void
}

function StepRow({ step, status, highlighted, onHover, rowRef }: StepRowProps) {
  const running = status === 'running'
  const queued = status === 'queued'

  return (
    <li ref={rowRef} onPointerEnter={onHover} className="relative flex items-center gap-3.5 px-4.5 py-2.5">
      {status === 'passed' && <CheckIcon className="size-4 shrink-0 text-soft motion-safe:animate-pop" />}
      {running && <RunningIcon className="size-4 shrink-0 text-accent" />}
      {queued && <QueuedIcon className="size-4 shrink-0 text-dim" />}
      <span
        className={`min-w-0 flex-1 transition-colors duration-200 ${
          running || highlighted ? 'text-accent' : queued ? 'text-faint' : ''
        }`}
      >
        {step.name}{' '}
        <span className={`transition-colors duration-200 ${running || highlighted ? 'text-soft' : 'text-faint'}`}>
          · {step.detail}
        </span>
      </span>
      <span className={`transition-colors duration-200 ${running || highlighted ? 'text-accent' : 'text-faint'}`}>
        {status === 'passed' ? step.when : status}
      </span>
    </li>
  )
}

function PipelineCard() {
  const [cursor, setCursor] = useState(() => (prefersReducedMotion() ? stopAt : -1))
  const [hovered, setHovered] = useState<number | null>(null)
  const [indicator, setIndicator] = useState<{ top: number; height: number } | null>(null)
  const rows = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    if (cursor >= stopAt) return
    const timer = window.setTimeout(() => setCursor((c) => c + 1), cursor < 0 ? 1400 : 650)
    return () => window.clearTimeout(timer)
  }, [cursor])

  // The highlight sits on the hovered row, or on the running step when nothing is hovered.
  const highlightIndex = hovered ?? (cursor >= 0 ? cursor : null)

  useLayoutEffect(() => {
    const row = highlightIndex === null ? null : rows.current[highlightIndex]
    setIndicator(row ? { top: row.offsetTop, height: row.offsetHeight } : null)
  }, [highlightIndex])

  const done = pipeline.filter((_, i) => statusAt(i, cursor) === 'passed').length

  return (
    <div className="relative overflow-hidden rounded-[10px] border border-line bg-panel font-mono text-sm shadow-[0_0_80px_-30px] shadow-accent/40">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4.5 py-3">
        <span className="flex items-center gap-2.5">
          <span className="size-2.5 rounded-full bg-accent motion-safe:animate-pulse" />
          <span className="font-semibold">career-pipeline</span>
          <span className="text-faint">
            · {done}/{pipeline.length} steps
          </span>
        </span>
        <button
          type="button"
          onClick={() => setCursor(-1)}
          disabled={cursor < stopAt}
          className="cursor-pointer rounded border border-accent px-2.5 py-1 text-xs text-accent transition-colors hover:bg-accent hover:text-bg disabled:cursor-default disabled:border-line disabled:text-faint disabled:hover:bg-transparent"
        >
          {cursor < stopAt ? 'running…' : '↻ re-run'}
        </button>
      </div>
      <ol className="relative py-2" aria-label="Career pipeline" onPointerLeave={() => setHovered(null)}>
        <li
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bg-accent/10 transition-[top,height,opacity] duration-300 ease-out ${
            indicator ? 'opacity-100' : 'opacity-0'
          }`}
          style={indicator ?? undefined}
        >
          <span className="absolute inset-y-0 left-0 w-0.5 bg-accent" />
        </li>
        {pipeline.map((step, i) => (
          <StepRow
            key={step.name}
            step={step}
            status={statusAt(i, cursor)}
            highlighted={hovered === i}
            onHover={() => setHovered(i)}
            rowRef={(el) => {
              rows.current[i] = el
            }}
          />
        ))}
      </ol>
      <div className="h-0.5 bg-line" aria-hidden="true">
        <div
          className="h-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${(done / pipeline.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

export function Hero() {
  const [first, last] = profile.name.split(' ')

  return (
    <section
      id="home"
      className="mx-auto grid max-w-310 items-center gap-14 px-4 pt-20 pb-24 sm:px-8 sm:pt-24 lg:grid-cols-2 lg:px-12"
    >
      <div className="flex flex-col gap-6">
        <p className="font-mono text-[15px] text-faint">
          <span className="text-accent">{profile.handle}@cloud</span>:<span className="text-soft">~</span>${' '}
          <Typewriter text="./intro.sh" delay={250} />
        </p>
        <h1 className="font-mono text-[clamp(42px,5.6vw,72px)] leading-[1.02] font-extrabold tracking-tight">
          <ScrambleText text={first} delay={600} />
          <br />
          <ScrambleText text={last} delay={800} />
          <span aria-hidden="true" className="text-accent motion-safe:animate-blink">
            _
          </span>
        </h1>
        <Reveal delay={1100}>
          <p className="font-mono text-base text-accent sm:text-xl">&gt; {profile.command}</p>
        </Reveal>
        <Reveal delay={1250}>
          <p className="max-w-135 text-lg leading-relaxed text-muted">{profile.summary}</p>
        </Reveal>
        <Reveal delay={1400} className="flex flex-wrap gap-3 font-mono">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-md bg-accent px-5 py-3.5 text-[15px] font-semibold text-bg shadow-[0_0_40px_-12px] shadow-accent transition hover:-translate-y-0.5 hover:bg-accent-hover hover:text-bg"
          >
            $ sudo hire-me
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/35 opacity-0 transition-[left,opacity] duration-700 group-hover:left-[120%] group-hover:opacity-100"
            />
          </a>
          <a
            href="#projects"
            className="rounded-md border border-line-strong bg-panel px-5 py-3.5 text-[15px] text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-ink"
          >
            $ ls ./projects
          </a>
          <a
            href={profile.resume}
            className="rounded-md border border-line-strong bg-panel px-5 py-3.5 text-[15px] text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-ink"
          >
            $ open resume.pdf
          </a>
          <a href="#terminal" className="self-center px-1 py-3 text-[15px]">
            or try the shell ↓
          </a>
        </Reveal>
      </div>

      <Reveal delay={400}>
        <PipelineCard />
      </Reveal>
    </section>
  )
}
