import { NavItem, Product, Solution, Partner } from '@/types';

// Navigation structure
export const NAVIGATION: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'AI Platform',
        href: '/products/ai-platform',
        description: 'Comprehensive AI and machine learning platform',
        icon: '🤖'
      },
      {
        label: 'FinTech Suite',
        href: '/products/fintech-suite',
        description: 'Complete financial technology solutions',
        icon: '💰'
      },
      {
        label: 'HealthTech Solutions',
        href: '/products/healthtech-solutions',
        description: 'Advanced healthcare technology',
        icon: '🏥'
      },
      {
        label: 'Blockchain Tools',
        href: '/products/blockchain-tools',
        description: 'Secure blockchain solutions',
        icon: '⛓️'
      },
      {
        label: 'Analytics Dashboard',
        href: '/products/analytics-dashboard',
        description: 'Real-time analytics and BI',
        icon: '📊'
      },
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: 'Financial Services',
        href: '/solutions/financial-services',
        description: 'Banking and payment solutions',
        icon: '🏦'
      },
      {
        label: 'Healthcare',
        href: '/solutions/healthcare',
        description: 'Digital health platforms',
        icon: '⚕️'
      },
      {
        label: 'Insurance',
        href: '/solutions/insurance',
        description: 'InsurTech automation',
        icon: '🛡️'
      },
      {
        label: 'Retail & E-commerce',
        href: '/solutions/retail-ecommerce',
        description: 'Commerce platforms',
        icon: '🛒'
      },
      {
        label: 'Enterprise',
        href: '/solutions/enterprise',
        description: 'Enterprise solutions',
        icon: '🏢'
      },
    ]
  },
  {
    label: 'Partners',
    href: '/partners',
    children: [
      {
        label: 'Technology Partners',
        href: '/partners/technology',
        description: 'Our tech ecosystem',
        icon: '🤝'
      },
      {
        label: 'Integration Partners',
        href: '/partners/integration',
        description: 'API and platform integrations',
        icon: '🔗'
      },
      {
        label: 'Become a Partner',
        href: '/partners/join',
        description: 'Join our partner network',
        icon: '✨'
      },
    ]
  },
  {
    label: 'Customers',
    href: '/customers',
    children: [
      {
        label: 'Case Studies',
        href: '/customers/case-studies',
        description: 'Real-world success stories',
        icon: '📈'
      },
      {
        label: 'Testimonials',
        href: '/customers/testimonials',
        description: 'What our clients say',
        icon: '💬'
      },
      {
        label: 'Success Stories',
        href: '/customers/success-stories',
        description: 'Customer achievements',
        icon: '🏆'
      },
    ]
  },
  {
    label: 'Research',
    href: '/research',
    children: [
      {
        label: 'Whitepapers',
        href: '/research/whitepapers',
        description: 'Technical insights',
        icon: '📄'
      },
      {
        label: 'Blog',
        href: '/research/blog',
        description: 'Latest thoughts and trends',
        icon: '✍️'
      },
      {
        label: 'Innovation Lab',
        href: '/research/innovation-lab',
        description: 'Experimental projects',
        icon: '🔬'
      },
      {
        label: 'Publications',
        href: '/research/publications',
        description: 'Research papers',
        icon: '📚'
      },
    ]
  },
  {
    label: 'Company',
    href: '/company',
    children: [
      {
        label: 'About Us',
        href: '/company/about',
        description: 'Our story and mission',
        icon: '🌟'
      },
      {
        label: 'Team',
        href: '/company/team',
        description: 'Meet our experts',
        icon: '👥'
      },
      {
        label: 'Careers',
        href: '/company/careers',
        description: 'Join our team',
        icon: '💼'
      },
      {
        label: 'Contact',
        href: '/company/contact',
        description: 'Get in touch',
        icon: '📞'
      },
      {
        label: 'News',
        href: '/company/news',
        description: 'Latest updates',
        icon: '📰'
      },
    ]
  },
];

// Company information
export const COMPANY_INFO = {
  name: 'Spheratic',
  tagline: 'Not Another Tech Company',
  description: 'We create innovative applications in Empathy Tech, FinTech, Human Tech, AI and Deep Tech domains with human-first approach.',
  email: 'connect@spheratic.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Innovation Drive',
    city: 'Tech Valley',
    state: 'CA',
    zip: '94000',
    country: 'USA'
  },
  social: {
    linkedin: 'https://linkedin.com/company/spheratic',
    twitter: 'https://twitter.com/spheratic',
    github: 'https://github.com/spheratic',
  }
};

// Tech domains
export const TECH_DOMAINS = [
  {
    id: 'empathy-tech',
    name: 'Empathy Tech',
    description: 'Building technology that understands and responds to human emotions and needs.',
    icon: 'heart',
    color: 'text-pink-500'
  },
  {
    id: 'fintech',
    name: 'FinTech',
    description: 'Revolutionary financial solutions that make banking and payments seamless.',
    icon: 'coins',
    color: 'text-green-500'
  },
  {
    id: 'human-tech',
    name: 'Human Tech',
    description: 'Technology designed to enhance human capabilities and improve quality of life.',
    icon: 'users',
    color: 'text-blue-500'
  },
  {
    id: 'ai-innovation',
    name: 'AI & Innovation',
    description: 'Cutting-edge artificial intelligence solutions that drive innovation forward.',
    icon: 'brain',
    color: 'text-purple-500'
  },
  {
    id: 'deep-tech',
    name: 'Deep Tech',
    description: 'Advanced technologies based on substantial scientific and engineering innovation.',
    icon: 'atom',
    color: 'text-orange-500'
  }
];

// Animation configurations
export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

// Contact form types
export const CONTACT_TYPES = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'product', label: 'Product Demo' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'support', label: 'Technical Support' },
];

// SEO defaults
export const SEO_DEFAULTS = {
  title: 'Spheratic - Not Another Tech Company',
  description: 'Spheratic creates innovative applications in Empathy Tech, FinTech, Human Tech, AI and Deep Tech domains with human-first approach.',
  keywords: 'AI, FinTech, HealthTech, Blockchain, Innovation, Technology Solutions',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
};
