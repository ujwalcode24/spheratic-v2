'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DetailCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  stats?: { label: string; value: string }[];
  className?: string;
  variant?: 'default' | 'highlight';
  index?: number;
}

export const DetailCard: React.FC<DetailCardProps> = ({
  title,
  description,
  icon,
  features,
  stats,
  className = '',
  variant = 'default',
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-lg p-8 border border-accent-gray-200 hover:border-primary-500/50 hover:shadow-lg transition-all duration-300 ${
        variant === 'highlight' ? 'bg-accent-gray-50 border-primary-500/30' : ''
      } ${className}`}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-6 flex items-center justify-center w-16 h-16 bg-primary-50 rounded-lg">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-bold text-accent-gray-900 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-accent-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-accent-gray-900 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-accent-gray-700">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Stats */}
      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-accent-gray-200">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-primary-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-accent-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default DetailCard;

