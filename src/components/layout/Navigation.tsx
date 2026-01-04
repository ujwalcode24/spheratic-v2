'use client';

import React, { useState, useEffect, type JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAVIGATION, COMPANY_INFO } from '@/lib/constants';
import {
  Cpu,
  Wallet,
  Stethoscope,
  Link2,
  BarChart3,
  Building2,
  Heart,
  Shield,
  ShoppingCart,
  Briefcase,
  TrendingUp,
  MessageSquare,
  Trophy,
  Info,
  Users,
  Briefcase as BriefcaseIcon,
  Phone,
  Newspaper,
  BookOpen,
  FileText,
  Handshake,
  UserPlus,
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const getIconForTitle = (title: string): JSX.Element => {
    const iconMap: { [key: string]: JSX.Element } = {
      'AI Platform': <Cpu className="w-5 h-5 text-slate-400" />,
      'FinTech Suite': <Wallet className="w-5 h-5 text-slate-400" />,
      'HealthTech Solutions': <Stethoscope className="w-5 h-5 text-slate-400" />,
      'Blockchain Tools': <Link2 className="w-5 h-5 text-slate-400" />,
      'Analytics Dashboard': <BarChart3 className="w-5 h-5 text-slate-400" />,
      'Financial Services': <Building2 className="w-5 h-5 text-slate-400" />,
      'Healthcare': <Heart className="w-5 h-5 text-slate-400" />,
      'Insurance': <Shield className="w-5 h-5 text-slate-400" />,
      'Retail & E-commerce': <ShoppingCart className="w-5 h-5 text-slate-400" />,
      'Enterprise': <Briefcase className="w-5 h-5 text-slate-400" />,
      'Case Studies': <TrendingUp className="w-5 h-5 text-slate-400" />,
      'Testimonials': <MessageSquare className="w-5 h-5 text-slate-400" />,
      'Success Stories': <Trophy className="w-5 h-5 text-slate-400" />,
      'About Us': <Info className="w-5 h-5 text-slate-400" />,
      'Team': <Users className="w-5 h-5 text-slate-400" />,
      'Careers': <BriefcaseIcon className="w-5 h-5 text-slate-400" />,
      'Contact': <Phone className="w-5 h-5 text-slate-400" />,
      'News': <Newspaper className="w-5 h-5 text-slate-400" />,
      'Resources': <BookOpen className="w-5 h-5 text-slate-400" />,
      'Blog': <FileText className="w-5 h-5 text-slate-400" />,
      'Documentation': <FileText className="w-5 h-5 text-slate-400" />,
      'Technology Partners': <Handshake className="w-5 h-5 text-slate-400" />,
      'Become a Partner': <UserPlus className="w-5 h-5 text-slate-400" />,
    };

    return iconMap[title] || <Cpu className="w-5 h-5 text-slate-400" />;
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-500">
              {COMPANY_INFO.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      className={cn(
                        'flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200',
                        isActiveLink(item.href)
                          ? 'text-primary-500'
                          : 'text-accent-gray-700 hover:text-primary-500'
                      )}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl py-4 z-50 backdrop-blur-md"
                        >
                          <div className="px-4 py-2 border-b border-slate-100 mb-2">
                            <h3 className="text-sm font-semibold text-accent-gray-900">{item.label}</h3>
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-start px-4 py-3 text-sm hover:bg-slate-50 hover:border-l-4 hover:border-l-blue-500 transition-all duration-200 group"
                              onClick={closeDropdown}
                            >
                              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                                {getIconForTitle(child.label)}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-accent-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                                  {child.label}
                                </div>
                                <div className="text-xs text-accent-gray-500 mt-1">
                                  {child.description}
                                </div>
                              </div>
                              <svg
                                className="w-4 h-4 text-accent-gray-400 group-hover:text-primary-500 transition-colors duration-200 mt-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-colors duration-200',
                      isActiveLink(item.href)
                        ? 'text-primary-500'
                        : 'text-accent-gray-700 hover:text-primary-500'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}


          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-accent-gray-700 hover:text-primary-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-accent-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NAVIGATION.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-accent-gray-700 hover:text-primary-500 hover:bg-accent-gray-50 rounded-md"
                        >
                          <span>{item.label}</span>
                          <svg
                            className={cn(
                              'w-4 h-4 transition-transform duration-200',
                              activeDropdown === item.label && 'rotate-180'
                            )}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={cn(
                                    'block px-3 py-2 text-sm rounded-md transition-colors duration-200',
                                    isActiveLink(child.href)
                                      ? 'text-primary-500 bg-primary-50'
                                      : 'text-accent-gray-600 hover:text-primary-500 hover:bg-accent-gray-50'
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200',
                          isActiveLink(item.href)
                            ? 'text-primary-500 bg-primary-50'
                            : 'text-accent-gray-700 hover:text-primary-500 hover:bg-accent-gray-50'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
