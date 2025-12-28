import { useState, useCallback } from 'react';
import { Location, MapConfig } from '@/models/location.model';
import { LocationService } from '@/services/location.service';

export const useWorldMap = (customLocations?: Location[]) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  
  const locations = customLocations || LocationService.getCollaborationLocations();
  const mapConfig = LocationService.getMapConfig();

  const handleLocationHover = useCallback((locationName: string) => {
    setHoveredLocation(locationName);
  }, []);

  const handleLocationLeave = useCallback(() => {
    setHoveredLocation(null);
  }, []);

  return {
    locations,
    mapConfig,
    hoveredLocation,
    handleLocationHover,
    handleLocationLeave,
  };
};

