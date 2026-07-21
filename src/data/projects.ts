export interface Project {
  name: string;
  description: string;
  category: 'Cybersecurity' | 'OSINT' | 'Security Research' | 'Pentesting' | 'Web Security' | 'Network Security' | 'CTF' | 'Tooling' | 'Open Source';
  status: 'Active' | 'Beta' | 'Archived' | 'Coming Soon';
  repository: string;
  documentation?: string;
  tags?: string[];
}

export const projects: Project[] = [
  // Placeholder projects - to be updated with real data
];