import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

interface Location {
  name: string;
  coordinates: [number, number];
}

interface WorldMapProps {
  locations?: Location[];
  title?: string;
}

const DEFAULT_LOCATIONS: Location[] = [
  { name: 'USA', coordinates: [-95.7129, 37.0902] },
  { name: 'UK', coordinates: [-0.1276, 51.5074] },
  { name: 'Denmark', coordinates: [9.5018, 56.2639] },
  { name: 'Germany', coordinates: [10.4515, 51.1657] },
  { name: 'China', coordinates: [104.1954, 35.8617] },
  { name: 'Hong Kong', coordinates: [114.1694, 22.3193] },
  { name: 'Malaysia', coordinates: [101.9758, 4.2105] },
  { name: 'Philippines', coordinates: [121.7740, 12.8797] },
];

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap = ({ locations = DEFAULT_LOCATIONS, title }: WorldMapProps) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {title && (
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 text-center">{title}</p>
      )}
      <div className="relative overflow-hidden">
        <ComposableMap
          projectionConfig={{
            scale: 120,
            center: [20, 30],
          }}
          style={{ width: '100%', height: 'auto' }}
          projection="geoMercator"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.properties.name !== "Antarctica")
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth={0.5}
                    className="text-gray-300 dark:text-gray-600"
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
            }
          </Geographies>
          {locations.map((loc, index) => (
            <Marker key={loc.name} coordinates={loc.coordinates}>
              {/* Ping animation ring */}
              <circle
                r={10}
                fill="none"
                stroke="#38bdf8"
                strokeWidth={2}
                opacity={0.5}
                className="animate-ping"
                style={{ animationDelay: `${index * 0.2}s`, animationDuration: '2s' }}
              />
              {/* Main dot */}
              <circle
                r={5}
                fill={hoveredLocation === loc.name ? '#38bdf8' : '#0ea5e9'}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredLocation(loc.name)}
                onMouseLeave={() => setHoveredLocation(null)}
                style={{ transform: hoveredLocation === loc.name ? 'scale(1.3)' : 'scale(1)' }}
              />
              {/* Tooltip */}
              {hoveredLocation === loc.name && (
                <g>
                  <rect
                    x={-loc.name.length * 3.5 - 8}
                    y={-28}
                    width={loc.name.length * 7 + 16}
                    height={18}
                    rx={4}
                    fill="rgba(15, 23, 42, 0.9)"
                    className="backdrop-blur"
                  />
                  <text
                    textAnchor="middle"
                    y={-15}
                    className="fill-white text-[10px] font-medium"
                    style={{ pointerEvents: 'none' }}
                  >
                    {loc.name}
                  </text>
                </g>
              )}
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default WorldMap;

