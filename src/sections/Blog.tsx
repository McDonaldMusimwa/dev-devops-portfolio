import { Reveal } from '../components/Reveal'
import { Section, SectionHeading } from '../components/SectionHeading'
import { blog } from '../data/portfolio'

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeading
        command="ls -lt"
        target="~/blog"
        title="Writing"
        aside={
          <a href={blog.allPosts.href} className="py-3 font-mono text-sm">
            {blog.allPosts.label} ↗
          </a>
        }
      />
      <ul className="overflow-hidden rounded-[10px] border border-line bg-panel font-mono text-sm">
        {blog.posts.map((post, i) => {
          const [before, after] = post.slug.split('{}')
          return (
            <Reveal as="li" key={post.href + post.date} delay={i * 80} className="border-b border-line last:border-b-0">
              <a
                href={post.href}
                className="group flex flex-wrap gap-x-6 gap-y-1.5 px-5 py-4.5 text-ink transition-colors hover:bg-ink/[0.04] hover:text-ink"
              >
                <span className="text-faint">-rw-r--r--</span>
                <time className="text-faint" dateTime={post.date}>
                  {post.date}
                </time>
                <span className="min-w-60 flex-1">
                  {before}
                  <span className="text-accent">{post.highlight}</span>
                  {after}
                </span>
                <span
                  aria-hidden="true"
                  className="-translate-x-2 text-accent opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  open →
                </span>
              </a>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
