// Common types for the Spheratic website

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  category: string;
  image?: string;
  slug: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  industry: string;
  benefits: string[];
  technologies: string[];
  caseStudy?: CaseStudy;
  slug: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: Metric[];
  technologies: string[];
  duration: string;
  year: string;
  slug: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: 'technology' | 'integration' | 'strategic';
  website?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  type: 'general' | 'product' | 'partnership' | 'support';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: number;
}
