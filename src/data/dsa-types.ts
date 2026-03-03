export interface DSAProblem {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  articleLink?: string;
  leetcodeLink?: string;
  gfgLink?: string;
  codingNinjasLink?: string;
  patternPreview?: string;
}

export interface DSASubSection {
  title: string;
  problems: DSAProblem[];
}

export interface DSASection {
  title: string;
  subSections: DSASubSection[];
}
