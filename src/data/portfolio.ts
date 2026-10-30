// All site content lives here so sections stay presentational.

export type Link = { label: string; href: string }

export type PipelineStep = {
  name: string
  detail: string
  when: string
  status: 'passed' | 'running' | 'queued'
}

export type Project = {
  repo: string
  title: string
  kind: string
  featured?: boolean
  description: string
  meta: [key: string, value: string][]
  links: Link[]
}

export type Job = {
  tag: string
  head?: boolean
  period: string
  title: string
  bullets: string[]
}

export type Post = {
  date: string
  slug: string
  highlight: string
  href: string
}

export const profile = {
  name: 'McDonald Musimwa',
  handle: 'mcdonald',
  headshot: '/headshot.jpeg',
  availability: 'open to DevOps roles',
  command: 'software_developer --migrate-to=devops',
  headline: 'I used to write the code. Now I ship it.',
  summary:
    "AWS-certified developer who already ships to production: Docker on ECS, RDS, and CI/CD to staging and prod. Now I'm making the pipeline the job.",
  email: 'musimwamcdonald@gmail.com',
  resume: 'https://drive.google.com/file/d/1cjvzTQkc-1YBu7E6Z4gzLZ60EIJRR4Q2/view?usp=sharing',
  socials: [
    { label: 'github', href: 'https://github.com/McDonaldMusimwa' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/mcdonaldmusimwa' },
    { label: 'youtube', href: 'https://www.youtube.com/@mcdthedev' },
  ] satisfies Link[],
}

export const pipeline: PipelineStep[] = [
  { name: 'checkout', detail: 'B.S. Software Dev, BYU–Idaho', when: '2020–24', status: 'passed' },
  { name: 'build', detail: 'Software Engineer, DPIT', when: '2024', status: 'passed' },
  { name: 'provision', detail: 'EC2 / RDS / S3, SkyIT', when: '2025', status: 'passed' },
  { name: 'certify', detail: 'AWS Solutions Architect', when: 'assoc.', status: 'passed' },
  { name: 'deploy', detail: 'ECS + CI/CD, Transhumanity AI', when: 'running', status: 'running' },
  { name: 'release', detail: 'DevOps Engineer', when: 'queued', status: 'queued' },
]

// Rendered as a TypeScript object literal in the About section.
export const engineer: Record<string, string | string[]> = {
  name: 'McDonald Musimwa',
  role: 'Software Developer → DevOps',
  currently: 'Transhumanity AI',
  certified: ['AWS SA – Associate'],
  cloud: ['ECS', 'EC2', 'RDS', 'S3', 'Lambda'],
  ship: ['Docker', 'GitHub Actions', 'CI/CD'],
  code: ['TypeScript', 'Node', 'Python', 'Java'],
  data: ['PostgreSQL', 'DynamoDB'],
  learning: ['Kubernetes', 'Terraform'],
}

export const about = {
  title: 'From features to pipelines',
  paragraphs: [
    'I graduated from BYU–Idaho in 2024 and have built full-stack products at three companies since. Each role pulled me further into deployment: EC2 and RDS at SkyIT, then multi-service Docker on ECS with CI/CD at Transhumanity AI.',
    'I care about what happens after the merge, and I document what I learn on YouTube as @mcdthedev.',
  ],
}

export const projects: Project[] = [
  {
    repo: 'practiceaws',
    title: 'Practice Solution',
    kind: 'serverless',
    featured: true,
    description: 'Interactive practice for AWS knowledge. React client, Cognito sign-in, and a serverless back end.',
    meta: [
      ['stack', '[react, zustand, cognito]'],
      ['infra', '[api-gateway, lambda, dynamodb]'],
    ],
    links: [
      { label: 'live', href: 'https://staging.d385k1fvsqio60.amplifyapp.com/' },
      { label: 'source', href: 'https://github.com/McDonaldMusimwa/practiceaws' },
    ],
  },
  {
    repo: 'aitrainer',
    title: 'AI Trainer pipeline',
    kind: 'ci/cd',
    featured: true,
    description: 'GitHub Actions workflow that typechecks, builds cached Docker images and runs on pinned runners.',
    meta: [
      ['runs-on', 'ubuntu-24.04'],
      ['steps', '[typecheck, docker-build --cache]'],
    ],
    links: [{ label: 'source', href: 'https://github.com/McDonaldMusimwa' }],
  },
  {
    repo: 'finace',
    title: 'Finace',
    kind: 'web',
    description: 'Reads PDF bank statements and categorises every transaction into a clear spending overview.',
    meta: [
      ['input', 'statement.pdf'],
      ['hosting', 'aws-amplify'],
    ],
    links: [
      { label: 'live', href: 'https://main.d3majrchxii62n.amplifyapp.com/' },
      { label: 'source', href: 'https://github.com/McDonaldMusimwa/finace' },
    ],
  },
  {
    repo: 'InvoiceToGo',
    title: 'InvoGo',
    kind: 'mobile',
    description: 'Invoicing for handymen: create an invoice fast and share it straight to WhatsApp.',
    meta: [
      ['stack', '[typescript, react-native]'],
      ['backend', 'firebase'],
    ],
    links: [
      { label: 'live', href: 'https://main.d2m7mhv4scf0qf.amplifyapp.com/' },
      { label: 'source', href: 'https://github.com/McDonaldMusimwa/InvoiceToGo' },
    ],
  },
]

export const jobs: Job[] = [
  {
    tag: 'v3',
    head: true,
    period: 'Nov 2025 – present',
    title: 'feat: Software Developer @ Transhumanity AI',
    bullets: [
      'Deployed multi-service Docker architecture on AWS ECS with RDS PostgreSQL per service (Alembic + Sequelize migrations).',
      'Set up CI/CD for automated testing and deploys to staging and production.',
      'Built REST and WebSocket APIs for real-time AI agents, plus React traffic-analysis charts.',
    ],
  },
  {
    tag: 'v2',
    period: 'May 2025 – Oct 2025',
    title: 'feat: Software Developer @ SkyIT Services',
    bullets: ['Deployed a Next.js + Prisma app on EC2 with RDS and S3.', 'Implemented auth with AWS Cognito User Pools.'],
  },
  {
    tag: 'v1',
    period: 'Sept 2024 – May 2025',
    title: 'feat: Software Engineer @ DPIT Solutions',
    bullets: [
      'Built web apps with Java, Node.js and React, joined by REST APIs.',
      'Turned Figma designs into working software in an agile team.',
    ],
  },
  {
    tag: 'v0',
    period: '2020 – 2024',
    title: 'init: B.S. Software Development @ BYU–Idaho',
    bullets: [],
  },
]

// Rendered as JSON in the Education section.
export const degree = {
  degree: 'B.S. Software Development',
  school: 'Brigham Young University–Idaho',
  period: 'Jan 2020 – Dec 2024',
  rank: 'top 10% of program',
  focus: ['software eng', 'databases', 'operating systems'],
}

export const certification = {
  title: 'AWS Certified Solutions Architect – Associate',
  description: 'Designing scalable, secure and cost-effective applications on AWS.',
  href: 'https://www.credly.com/badges/0b853cd1-9da3-4ea5-8e70-2e74f8c116aa/linked_in',
}

export const blog = {
  allPosts: { label: 'medium.com/@mcdonald', href: 'https://medium.com/@mcdonald.musimwa74' },
  posts: [
    {
      date: '2025-11-29',
      slug: 'starting-a-node-server-with-{}.md',
      highlight: 'typescript',
      href: 'https://medium.com/@mcdonald.musimwa74/starting-a-node-js-server-with-typescript-613b3abd7aee',
    },
    {
      date: '2024-11-30',
      slug: 'java-vs-javascript-{}-meets-multi-threading.md',
      highlight: 'event-loop',
      href: 'https://medium.com/@mcdonald.musimwa74/java-vs-javascript-event-loop-meets-multi-threading-ae7bf63c3789',
    },
    {
      date: '2023-11-10',
      slug: 'navigating-{}-enterprise.md',
      highlight: 'technology-driven',
      href: 'https://www.linkedin.com/in/mcdonaldmusimwa',
    },
    {
      date: '2023-10-23',
      slug: 'web-apps-{}.md',
      highlight: 'static-or-dynamic',
      href: 'https://www.linkedin.com/in/mcdonaldmusimwa',
    },
  ] satisfies Post[],
}

export const sections = [
  { id: 'home', file: 'home.sh' },
  { id: 'terminal', file: 'shell.sh' },
  { id: 'about', file: 'about.ts' },
  { id: 'projects', file: 'projects.yaml' },
  { id: 'experience', file: 'experience.log' },
  { id: 'education', file: 'education.json' },
  { id: 'blog', file: 'blog.md' },
  { id: 'contact', file: 'hire-me.sh' },
] as const

export type SectionId = (typeof sections)[number]['id']
