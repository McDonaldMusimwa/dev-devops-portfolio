import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  command: string
  target: string
  title: string
  aside?: ReactNode
}

export function SectionHeading({ command, target, title, aside }: Props) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-col gap-2.5">
        <p className="font-mono text-sm text-faint">
          $ {command} <span className="text-accent">{target}</span>
        </p>
        <h2 className="text-4xl leading-tight font-bold sm:text-[40px]">{title}</h2>
      </div>
      {aside}
    </Reveal>
  )
}

export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto flex max-w-310 flex-col gap-7 px-4 py-18 sm:px-8 lg:px-12">
      {children}
    </section>
  )
}
