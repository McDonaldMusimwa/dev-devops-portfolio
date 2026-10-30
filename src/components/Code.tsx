import type { ReactNode } from 'react'

export function Str({ children }: { children: ReactNode }) {
  return <span className="text-soft">"{children}"</span>
}

export function Key({ children }: { children: ReactNode }) {
  return <span className="text-accent">{children}</span>
}

// Renders a string or string[] as a code literal: "a" or ["a", "b"].
export function Value({ value }: { value: string | string[] }) {
  if (typeof value === 'string') return <Str>{value}</Str>
  return (
    <>
      [
      {value.map((item, i) => (
        <span key={item}>
          {i > 0 && ', '}
          <Str>{item}</Str>
        </span>
      ))}
      ]
    </>
  )
}
