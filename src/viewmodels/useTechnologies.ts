import { useMemo } from 'react';
import { TechnologyService } from '@/services';

export const useTechnologies = () => {
  const technologies = useMemo(() => TechnologyService.getAll(), []);
  const totalCount = useMemo(() => TechnologyService.getTotalCount(), []);

  const categorizedTechnologies = useMemo(() => [
    { title: 'Languages', items: technologies.languages },
    { title: 'Frontend', items: technologies.frontendFrameworks },
    { title: 'Backend', items: technologies.backendFrameworks },
    { title: 'Databases', items: technologies.databases },
    { title: 'Tools', items: technologies.tools },
    { title: 'Libraries', items: technologies.libraries },
  ], [technologies]);

  return {
    technologies,
    categorizedTechnologies,
    totalCount,
  };
};

