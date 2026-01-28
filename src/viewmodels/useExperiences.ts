import { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import { Milestone, WorkArrangement } from '@/models';
import { ExperienceService } from '@/services';

export const useExperiences = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState<Milestone | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const milestones = useMemo(() => ExperienceService.getMilestones(), []);
  const companyCount = useMemo(() => ExperienceService.getCompanyCount(), []);

  // Calculate proportional gaps between milestones (only for work experiences)
  const gapWeights = useMemo(() => {
    const weights: number[] = [];
    for (let i = 0; i < milestones.length - 1; i++) {
      const current = milestones[i];
      const next = milestones[i + 1];
      
      // Education/achievement milestones get minimal gap (decorative only)
      if (current.type !== 'work' || next.type !== 'work') {
        weights.push(0.5); // Small fixed gap for non-work milestones
        continue;
      }
      
      // Gap is from current's end to next's start (work experiences only)
      const currentEnd = current.endDate ? dayjs(current.endDate) : dayjs();
      const nextStart = dayjs(next.startDate);
      const monthsGap = Math.max(1, nextStart.diff(currentEnd, 'month'));
      weights.push(monthsGap);
    }
    return weights;
  }, [milestones]);

  // Get flex value for a gap (proportional to time for work, minimal for others)
  const getGapFlex = (index: number): number => {
    if (index >= gapWeights.length) return 1;
    const weight = gapWeights[index];
    // Non-work gaps stay small
    if (weight <= 0.5) return 0.5;
    // Work gaps: very subtle differences
    const workWeights = gapWeights.filter(w => w > 0.5);
    if (workWeights.length === 0) return 1;
    const minWorkWeight = Math.min(...workWeights);
    const ratio = weight / minWorkWeight;
    // Noticeable gaps: base 1, add larger percentage of difference
    // ratio 1 = 1, ratio 4 = 1.7, ratio 9 = 2.1
    return 1 + (Math.log(ratio) * 0.5);
  };

  const formatDateRange = (start: Date, end: Date | null): string => {
    const startYear = dayjs(start).year();
    const endYear = end ? dayjs(end).year() : null;
    if (!endYear || startYear === endYear) return `${startYear}`;
    return `${startYear} - ${endYear}`;
  };

  const formatDuration = (start: Date, end: Date | null): string => {
    const endDate = end ? dayjs(end) : dayjs();
    const months = endDate.diff(dayjs(start), 'month');
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years === 0) return `${remainingMonths}mo`;
    if (remainingMonths === 0) return `${years}yr`;
    return `${years}yr ${remainingMonths}mo`;
  };

  const getArrangementLabel = (arrangement: WorkArrangement): string => {
    switch (arrangement) {
      case 'onsite': return 'Onsite';
      case 'remote': return 'Remote';
      case 'hybrid': return 'Hybrid';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX + 20, y: e.clientY + 10 });
  };

  const handleMouseEnter = (milestone: Milestone, e: React.MouseEvent) => {
    if (!showAll) {
      setHoveredMilestone(milestone);
      setTooltipPos({ x: e.clientX + 20, y: e.clientY + 10 });
    }
  };

  const handleMouseLeave = () => {
    setHoveredMilestone(null);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setHoveredMilestone(null);
  };

  return {
    // State
    milestones,
    hoveredMilestone,
    showAll,
    tooltipPos,
    companyCount,
    gapWeights,
    
    // Actions
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    toggleShowAll,
    
    // Helpers
    getArrangementLabel,
    getGapFlex,
    formatDateRange,
    formatDuration,
  };
};

