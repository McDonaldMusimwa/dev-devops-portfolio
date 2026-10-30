import { profile } from '../data/portfolio'

const year = new Date().getFullYear()

export function StatusBar() {
  return (
    <footer className="bg-accent font-mono text-[13px] text-bg">
      <div className="mx-auto flex max-w-310 flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap gap-x-5 gap-y-1 py-2.5">
          <span className="font-semibold">⎇ main</span>
          <span>✓ 0 problems</span>
          <span>AWS SA–Associate</span>
          <span>© {year} {profile.name}</span>
        </div>
        <div className="flex flex-wrap">
          <a href={`mailto:${profile.email}`} className="px-2.5 py-3 font-semibold text-bg hover:text-bg hover:underline">
            email
          </a>
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href} className="px-2.5 py-3 text-bg hover:text-bg hover:underline">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
