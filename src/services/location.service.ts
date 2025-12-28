import { Location, MapConfig } from '@/models/location.model';

const COLLABORATION_LOCATIONS: Location[] = [
  { name: 'USA', coordinates: [-95.7129, 37.0902] },
  { name: 'UK', coordinates: [-0.1276, 51.5074] },
  { name: 'Denmark', coordinates: [9.5018, 56.2639] },
  { name: 'Germany', coordinates: [10.4515, 51.1657] },
  { name: 'China', coordinates: [104.1954, 35.8617] },
  { name: 'Hong Kong', coordinates: [114.1694, 22.3193] },
  { name: 'Malaysia', coordinates: [101.9758, 4.2105] },
  { name: 'Philippines', coordinates: [121.7740, 12.8797] },
];

const MAP_CONFIG: MapConfig = {
  geoUrl: "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
  projectionScale: 140,
  projectionCenter: [20, 30],
  excludeRegions: ['Antarctica'],
};

export const LocationService = {
  getCollaborationLocations: (): Location[] => COLLABORATION_LOCATIONS,
  getMapConfig: (): MapConfig => MAP_CONFIG,
};

