'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAVIGATION, COMPANY_INFO } from '@/lib/constants';
import { NavItem } from '@/types';

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
      'AI Platform': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
      'FinTech Suite': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
        </svg>
      ),
      'HealthTech Solutions': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.16-2.66c-.44-.53-1.25-.58-1.78-.15-.53.44-.58 1.25-.15 1.78l3 3.67c.25.31.61.5.99.5.38 0 .74-.19.99-.5l3.54-4.29c.44-.53.39-1.34-.15-1.78-.53-.44-1.34-.39-1.78.15z" />
        </svg>
      ),
      'Blockchain Tools': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
      'Analytics Dashboard': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-2h3v-5h-3v5zm-4 0h3V7h-3v10zm-4 0h3v-3H6v3z" />
        </svg>
      ),
      'Financial Services': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
        </svg>
      ),
      'Healthcare': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.16-2.66c-.44-.53-1.25-.58-1.78-.15-.53.44-.58 1.25-.15 1.78l3 3.67c.25.31.61.5.99.5.38 0 .74-.19.99-.5l3.54-4.29c.44-.53.39-1.34-.15-1.78-.53-.44-1.34-.39-1.78.15z" />
        </svg>
      ),
      'Insurance': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
      'Retail & E-commerce': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
      'Enterprise': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2z" />
        </svg>
      ),
      'Case Studies': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z" />
        </svg>
      ),
      'Testimonials': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5-1.25 0-2.5.756-2.5 2.972C2 5 2 10 2 10s0 8 3 8z" />
        </svg>
      ),
      'Success Stories': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      'About Us': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      'Team': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      'Careers': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.15l-.75-1.5H6.9l-.75 1.5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
        </svg>
      ),
      'Contact': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      'News': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.16-2.66c-.44-.53-1.25-.58-1.78-.15-.53.44-.58 1.25-.15 1.78l3 3.67c.25.31.61.5.99.5.38 0 .74-.19.99-.5l3.54-4.29c.44-.53.39-1.34-.15-1.78-.53-.44-1.34-.39-1.78.15z" />
        </svg>
      ),
      'Resources': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z" />
        </svg>
      ),
      'Blog': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.16-2.66c-.44-.53-1.25-.58-1.78-.15-.53.44-.58 1.25-.15 1.78l3 3.67c.25.31.61.5.99.5.38 0 .74-.19.99-.5l3.54-4.29c.44-.53.39-1.34-.15-1.78-.53-.44-1.34-.39-1.78.15z" />
        </svg>
      ),
      'Documentation': (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z" />
        </svg>
      ),
    };

    return iconMap[title] || (
      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    );
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
                          <div className="px-4 py-2 border-b border-accent-gray-100 mb-2">
                            <h3 className="text-sm font-semibold text-accent-gray-900">{item.label}</h3>
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-start px-4 py-3 text-sm hover:bg-primary-50 hover:border-l-4 hover:border-primary-500 transition-all duration-200 group"
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
