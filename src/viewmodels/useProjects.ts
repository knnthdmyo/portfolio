import { useState, useMemo } from 'react';
import { ProjectService } from '@/services';

export const useProjects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = useMemo(() => ProjectService.getProjects(), []);
  const projectCount = useMemo(() => ProjectService.getProjectCount(), []);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const isExpanded = (index: number): boolean => {
    return expandedIndex === index;
  };

  return {
    projects,
    projectCount,
    expandedIndex,
    toggleExpanded,
    isExpanded,
  };
};

