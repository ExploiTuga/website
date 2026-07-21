export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navigation: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research' },
  { label: 'Community', href: '/community' },
  { label: 'About', href: '/about' },
];

export const socialLinks: NavItem[] = [
  { label: 'GitHub', href: 'https://github.com/exploiTuga', external: true },
  { label: 'Discord', href: 'PLACEHOLDER_DISCORD_URL', external: true },
];