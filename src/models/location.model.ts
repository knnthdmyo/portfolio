export interface Location {
  name: string;
  coordinates: [number, number];
}

export interface MapConfig {
  geoUrl: string;
  projectionScale: number;
  projectionCenter: [number, number];
  excludeRegions: string[];
}

