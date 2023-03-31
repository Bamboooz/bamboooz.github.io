import { Component } from 'react';

export interface Github {
  username: string;
  sortBy?: string;
  limit?: number;
  exclude?: {
    forks?: boolean;
    projects?: Array<string>;
  };
}

export interface Social {
  linkedin?: string;
  twitter?: string;
  mastodon?: string;
  facebook?: string;
  instagram?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  dev?: string;
  stackoverflow?: string;
  website?: string;
  skype?: string;
  telegram?: string;
  phone?: string;
  email?: string;
}

export interface Blog {
  source?: string;
  username?: string;
  limit?: number;
}

export interface GoogleAnalytics {
  id?: string;
}

export interface Hotjar {
  id?: string;
  snippetVersion?: number;
}

export interface CustomTheme {
  primary?: string;
  secondary?: string;
  accent?: string;
  neutral?: string;
  'base-100'?: string;
  '--rounded-box'?: string;
  '--rounded-btn'?: string;
}

export interface ThemeConfig {
  defaultTheme?: string;
  disableSwitch?: boolean;
  respectPrefersColorScheme?: boolean;
  hideAvatarRing?: boolean;
  themes?: Array<string>;
  customTheme?: CustomTheme;
}

export interface Experience {
  company?: string;
  position?: string;
  from?: string;
  to?: string;
  companyLink?: string;
}
export interface Certifications {
  body?: string;
  name?: string;
  year?: string;
  link?: string;
}

export interface ExternalProjects {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
}

export interface Education {
  institution?: string;
  degree?: string;
  from?: string;
  to?: string;
}

export interface Resume {
  fileUrl?: string;
}

export interface Config {
  github: Github;
  social?: Social;
  resume?: Resume;
  skills?: Array<string>;
  experiences?: Array<Experience>;
  externalProjects?: Array<ExternalProjects>;
  certifications?: Array<Certifications>;
  education?: Array<Education>;
  blog?: Blog;
  googleAnalytics?: GoogleAnalytics;
  hotjar?: Hotjar;
  themeConfig?: ThemeConfig;
  footer?: string;
}

export interface GitProfileProps {
  config: Config;
}

declare class GitProfile extends Component<GitProfileProps> {}

export default GitProfile;
