import type { CommandResult } from '@/types';

const projectData = {
  'Professional / Internship': [
    { name: 'Binkeyit E-commerce', slug: 'ecommerce-platform', type: 'Full-Stack', tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe'] },
    { name: 'Quiz Application', slug: 'ai-dashboard', type: 'Full-Stack', tags: ['React.js', 'Socket.io', 'MongoDB', 'JWT'] },
  ],
  'Internship Projects': [
    { name: 'QuizWizard UI Revamp', slug: 'mobile-fitness-app', type: 'Internship', tags: ['AWS Lambda', 'Stripe', 'UI/UX'] },
    { name: 'Flutter Health App', slug: 'developer-tools-cli', type: 'Internship', tags: ['Flutter', 'Fitbit API', 'HealthKit'] },
  ],
};

const allSlugs = Object.values(projectData)
  .flat()
  .map((p) => p.slug);

const AVAILABLE_COMMANDS = [
  'help',
  'about',
  'education',
  'projects',
  'experience',
  'internship',
  'open',
  'contact',
  'resume',
  'workflow',
  'stack',
  'theme',
  'clear',
];

export function getAvailableCommands(): string[] {
  return AVAILABLE_COMMANDS;
}

export function getAutocompleteSuggestions(input: string): string[] {
  const parts = input.trim().split(' ');
  const cmd = parts[0]?.toLowerCase() || '';

  if (parts.length === 1) {
    return AVAILABLE_COMMANDS.filter((c) => c.startsWith(cmd));
  }

  if (cmd === 'open' && parts.length === 2) {
    const partial = parts[1]?.toLowerCase() || '';
    return allSlugs.filter((s) => s.startsWith(partial)).map((s) => `open ${s}`);
  }

  if (cmd === 'theme' && parts.length === 2) {
    const partial = parts[1]?.toLowerCase() || '';
    return ['classic', 'dark', 'light']
      .filter((t) => t.startsWith(partial))
      .map((t) => `theme ${t}`);
  }

  return [];
}

export function executeCommand(rawInput: string): CommandResult {
  const trimmed = rawInput.trim();
  if (!trimmed) return { type: 'output', content: [] };

  const parts = trimmed.split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (command) {
    case 'help':
      return helpCommand();
    case 'about':
      return aboutCommand();
    case 'projects':
      return projectsCommand();
    case 'education':
      return educationCommand();
    case 'experience':
      return experienceCommand();
    case 'internship':
      return internshipCommand();
    case 'open':
      return openCommand(args);
    case 'contact':
      return contactCommand();
    case 'resume':
      return resumeCommand();
    case 'workflow':
      return workflowCommand();
    case 'stack':
      return stackCommand();
    case 'theme':
      return themeCommand(args);
    case 'clear':
      return { type: 'clear' };
    default:
      return {
        type: 'error',
        content: [
          `  Command not found: ${command}`,
          `  Type 'help' to see available commands.`,
        ],
      };
  }
}

function helpCommand(): CommandResult {
  return {
    type: 'output',
    content: [
      '',
      '  {{cmd}}about{{/cmd}}         - Display bio information          {{cmd}}experience{{/cmd}}   - Show work history',
      '  {{cmd}}education{{/cmd}}     - Academic background              {{cmd}}internship{{/cmd}}   - Detailed internship log',
      '  {{cmd}}projects{{/cmd}}      - List all projects                {{cmd}}contact{{/cmd}}      - Get contact details',
      '  {{cmd}}open <slug>{{/cmd}}    - Open a project page              {{cmd}}theme <name>{{/cmd}} - Switch theme',
      '  {{cmd}}resume{{/cmd}}         - Download resume                  {{cmd}}clear{{/cmd}}        - Clear terminal screen',
      '  {{cmd}}workflow{{/cmd}}       - Engineering workflow             {{cmd}}stack{{/cmd}}        - Core tech stack',
      '',
    ],
  };
}

function aboutCommand(): CommandResult {
  return {
    type: 'output',
    content: [
      '',
      '  {{accent}}Name:{{/accent}}       Abhishek Kumar',
      '  {{accent}}Role:{{/accent}}       Software Engineer',
      '  {{accent}}Location:{{/accent}}   Delhi, India',
      '  {{accent}}Phone:{{/accent}}      +91 6387366258',
      '',
      '  Software Engineer with strong foundations in Data',
      '  Structures & Algorithms and experience building',
      '  scalable systems using MERN stack and AWS.',
      '',
      '  Proven ability to optimize performance and design',
      '  high-availability backend architectures.',
      '',
      '  Type {{cmd}}education{{/cmd}} for full academic details.',
      '',
    ],
  };
}

function projectsCommand(): CommandResult {
  const lines: string[] = [''];

  for (const [category, projects] of Object.entries(projectData)) {
    lines.push(`  {{category}}${category}{{/category}}`);
    for (const p of projects) {
      const tagsStr = p.tags.join(', ');
      lines.push(`  {{type}}[${p.type}]{{/type}} {{bold}}${p.name}{{/bold}}  {{dim}}- [${tagsStr}]{{/dim}}`);
    }
    lines.push('');
  }

  lines.push('  Use \'open <slug>\' to view a project.');
  lines.push('');
  return { type: 'output', content: lines };
}

function educationCommand(): CommandResult {
  return {
    type: 'output',
    content: [
      '',
      '  {{accent}}┌─────────────────────────────────────────────────────┐{{/accent}}',
      '  {{accent}}│{{/accent}}  {{bold}}🎓 ACADEMIC BACKGROUND{{/bold}}                              {{accent}}│{{/accent}}',
      '  {{accent}}└─────────────────────────────────────────────────────┘{{/accent}}',
      '',
      '  {{accent}}Degree:{{/accent}}       Bachelor of Technology (B.Tech)',
      '  {{accent}}Field:{{/accent}}        Computer Science & Engineering',
      '  {{accent}}Institution:{{/accent}}  Noida Institute of Engineering & Technology',
      '  {{accent}}Location:{{/accent}}     GB Nagar, India',
      '  {{accent}}Period:{{/accent}}       {{date}}Jul 2022 — Jun 2025{{/date}}',
      '  {{accent}}CGPA:{{/accent}}         {{bold}}7.87{{/bold}}',
      '',
      '  {{dim}}Achievements:{{/dim}}',
      '  {{success}}✓{{/success}} Winner of IoTRON 2.0 at NIET',
      '  {{success}}✓{{/success}} Smart India Hackathon 2023 — Grand Finale',
      '  {{success}}✓{{/success}} 5-day IDE Startup Bootcamp (MoE Innovation Cell & AICTE)',
      '',
      '  ──────────────────────────────────────────────────────',
      '',
      '  {{accent}}Degree:{{/accent}}       Diploma',
      '  {{accent}}Field:{{/accent}}        Electronics Engineering',
      '  {{accent}}Institution:{{/accent}}  Government Polytechnic Barabanki',
      '  {{accent}}Location:{{/accent}}     Barabanki, India',
      '  {{accent}}Period:{{/accent}}       {{date}}Jul 2018 — Aug 2021{{/date}}',
      '  {{accent}}Score:{{/accent}}        {{bold}}77.43%{{/bold}}',
      '',
    ],
  };
}

function experienceCommand(): CommandResult {
  return {
    type: 'output',
    content: [
      '',
      '  {{accent}}Gencoft Technologies{{/accent}}  —  Software Engineer Intern',
      '  {{dim}}Feb 2025 — Aug 2025  •  Remote{{/dim}}',
      '  Revamped UI/UX of quizwizard.net, increasing user engagement by 30%.',
      '  Built AWS Lambda functions for location-based Stripe payment integration.',
      '',
      '  Deployed payment infrastructure for manageupgrades.com with AWS API Gateway,',
      '  Lambda, and DynamoDB — reduced payment support tickets by 25%.',
      '',
      '  Designed cross-platform Flutter app integrating Fitbit Web API and',
      '  Apple HealthKit — 1,200+ daily active users.',
      '',
    ],
  };
}

function internshipCommand(): CommandResult {
  return {
    type: 'output',
    content: [
      '',
      '  {{accent}}>> INITIATING INTERNSHIP LOG SEQUENCE ...{{/accent}}',
      '',
      '  {{date}}2025-02-01{{/date}}   Onboarded at {{bold}}Gencoft Technologies{{/bold}} (Remote).',
      '  {{date}}2025-02-15{{/date}}   Assigned to {{bold}}QuizWizard.net{{/bold}}. UI/UX revamp initiated.',
      '  {{date}}2025-03-10{{/date}}   Revamped quiz UI. {{success}}Success:{{/success}} User engagement increased by 30%.',
      '  {{date}}2025-04-05{{/date}}   Developed AWS Lambda functions for Stripe payment gateway integration.',
      '  {{date}}2025-05-01{{/date}}   Built payment infra for {{bold}}manageupgrades.com{{/bold}} — API Gateway + DynamoDB.',
      '  {{date}}2025-05-20{{/date}}   {{success}}Success:{{/success}} Reduced payment-related support tickets by 25%.',
      '  {{date}}2025-06-15{{/date}}   Designed Flutter health app integrating Fitbit API & Apple HealthKit.',
      '  {{date}}2025-07-10{{/date}}   App live — real-time activity sync across 95% of devices.',
      '  {{date}}2025-08-01{{/date}}   {{success}}Success:{{/success}} 1,200+ daily active users achieved.',
      '',
      '  {{accent}}>> LOG END.{{/accent}}',
      '',
    ],
  };
}

function openCommand(args: string[]): CommandResult {
  if (args.length === 0) {
    return {
      type: 'error',
      content: ['  Usage: open <project-slug>', '  Type \'projects\' to see available slugs.'],
    };
  }
  const slug = args[0].toLowerCase();
  if (!allSlugs.includes(slug)) {
    return {
      type: 'error',
      content: [`  Project not found: ${slug}`, '', '  Available:', ...allSlugs.map((s) => `    - ${s}`)],
    };
  }
  return { type: 'navigate', target: `/projects/${slug}`, content: [`  Navigating to project: ${slug}...`] };
}

function contactCommand(): CommandResult {
  return {
    type: 'output',
    content: [
      '',
      '  {{accent}}Email:{{/accent}}      abhishekprajapati243@gmail.com',
      '  {{accent}}Phone:{{/accent}}      +91 6387366258',
      '  {{accent}}GitHub:{{/accent}}     github.com/abhishek',
      '  {{accent}}LinkedIn:{{/accent}}   linkedin.com/in/abhishek',
      '  {{accent}}LeetCode:{{/accent}}   leetcode.com/abhishek',
      '',
      '  Feel free to reach out! Always open to new',
      '  opportunities and interesting projects.',
      '',
    ],
  };
}

function resumeCommand(): CommandResult {
  return {
    type: 'output',
    content: ['', '  Downloading resume...', '  → /resume.pdf', ''],
  };
}

function workflowCommand(): CommandResult {
  return {
    type: 'output',
    content: [
      '',
      '  {{accent}}Engineering Workflow{{/accent}}',
      '  {{dim}}─────────────────────{{/dim}}',
      '',
      '  {{accent}}Design:{{/accent}}              Stitch',
      '  {{accent}}Planning:{{/accent}}            ChatGPT',
      '  {{accent}}Code Generation:{{/accent}}     Gemini Pro 3.1, Claude Opus 4.5,',
      '                         Sonnet 4.6 (Thinking)',
      '  {{accent}}IDE:{{/accent}}                 Antigravity',
      '',
      '  {{dim}}Approach:{{/dim}}',
      '  AI-assisted development with manual architectural',
      '  control and validation.',
      '',
    ],
  };
}

function stackCommand(): CommandResult {
  return {
    type: 'output',
    content: [
      '',
      '  {{accent}}Core Stack{{/accent}}',
      '  {{dim}}──────────{{/dim}}',
      '',
      '  Next.js 14',
      '  TypeScript',
      '  Tailwind CSS',
      '  GSAP + ScrollTrigger',
      '  MDX + Contentlayer',
      '  Zustand',
      '',
    ],
  };
}

function themeCommand(args: string[]): CommandResult {
  const valid = ['classic', 'dark', 'light'];
  if (args.length === 0) {
    return { type: 'error', content: ['  Usage: theme <name>', `  Available: ${valid.join(', ')}`] };
  }
  const t = args[0].toLowerCase();
  if (!valid.includes(t)) {
    return { type: 'error', content: [`  Invalid theme: ${t}`, `  Available: ${valid.join(', ')}`] };
  }
  return { type: 'output', content: [`  Theme changed to: ${t}`] };
}
