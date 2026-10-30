import { profile, sections } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { MoonIcon, PromptIcon, SunIcon } from './icons'
import { ScrollProgress } from './ScrollProgress'

const ids = sections.map((s) => s.id)

export function Header() {
  const active = useActiveSection(ids)
  const { theme, toggle } = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-panel/95 backdrop-blur">
      <div className="mx-auto flex max-w-310 flex-wrap items-center gap-x-4 px-4 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-2.5 py-3.5 font-mono text-sm font-semibold text-ink hover:text-ink">
          <PromptIcon className="size-5 text-accent" />
          {profile.name.toLowerCase().replace(' ', '-')}
          <span className="font-normal text-faint">— main</span>
        </a>
        <button
          type="button"
          onClick={toggle}
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
          className="ml-auto grid size-10 cursor-pointer place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent lg:order-last lg:ml-0"
        >
          {theme === 'dark' ? <SunIcon className="size-4.5" /> : <MoonIcon className="size-4.5" />}
        </button>
        <nav
          aria-label="Main"
          className="flex w-full overflow-x-auto font-mono text-[13px] [scrollbar-width:none] lg:ml-auto lg:w-auto [&::-webkit-scrollbar]:hidden"
        >
          {sections.map(({ id, file }) => {
            const isActive = id === active
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`shrink-0 border-t-2 px-4 py-3.5 ${
                  isActive ? 'border-accent bg-bg text-ink hover:text-ink' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {file}
              </a>
            )
          })}
        </nav>
      </div>
      <ScrollProgress />
    </header>
  )
}
