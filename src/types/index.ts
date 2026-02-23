export type Theme = 'classic' | 'dark' | 'light';

export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  coverImage: string;
  date: string;
  featured?: boolean;
  category?: string;
  liveUrl?: string;
}

export interface CommandResult {
  type: 'output' | 'error' | 'clear' | 'navigate';
  content?: string[];
  target?: string;
}

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string;
}
