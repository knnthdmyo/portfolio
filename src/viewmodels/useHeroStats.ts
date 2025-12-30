import { useState, useEffect, useMemo } from 'react';
import { ExperienceService } from '@/services';

const CAREER_START = new Date('2019-03-19');
const HOURS_PER_WEEK = 45; // Average of 40-50 hrs/week

interface HeroStats {
  years: number;
  hours: number;
  companies: number;
  projects: number;
}

export const useHeroStats = () => {
  const [stats, setStats] = useState<HeroStats>({
    years: 0,
    hours: 0,
    companies: 0,
    projects: 10, // Static value for projects worked on
  });

  const companyCount = useMemo(() => ExperienceService.getCompanyCount(), []);

  useEffect(() => {
    const calculateStats = () => {
      const now = new Date();
      const diffMs = now.getTime() - CAREER_START.getTime();
      const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
      const diffWeeks = diffMs / (1000 * 60 * 60 * 24 * 7);
      const hours = Math.floor(diffWeeks * HOURS_PER_WEEK);

      setStats({
        years: Math.floor(diffYears * 10) / 10,
        hours,
        companies: companyCount,
        projects: 8,
      });
    };

    calculateStats();
    const interval = setInterval(calculateStats, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, [companyCount]);

  const formatHours = (hours: number): string => {
    if (hours >= 1000) {
      return `${(hours / 1000).toFixed(1)}k`;
    }
    return hours.toLocaleString();
  };

  return {
    stats,
    formatHours,
  };
};

