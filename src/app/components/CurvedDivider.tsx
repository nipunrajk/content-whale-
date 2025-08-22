import React from 'react';

interface CurvedDividerProps {
  /** Fill color of the curved shape */
  fill?: string;
  /** Place the divider visually at the top or bottom of a section */
  position?: 'top' | 'bottom';
  /** Flip the curve (useful when position/top vs bottom needs inverse bulge) */
  invert?: boolean;
  /** Curve style */
  variant?: 'arc' | 'wave';
  /** How pronounced the curve is (in SVG units). Default 40. */
  bulge?: number;
  /** Extra class names for the wrapper */
  className?: string;
  /** Height of the SVG container (px). Default 120. */
  height?: number;
  /** Render only a curved line instead of a filled shape */
  lineOnly?: boolean;
  /** Stroke color when lineOnly is true */
  stroke?: string;
  /** Stroke width when lineOnly is true */
  strokeWidth?: number;
  /** Add drop shadow to the line */
  shadow?: boolean;
  /** Shadow color for the line */
  shadowColor?: string;
  /** Shadow blur radius */
  shadowBlur?: number;
  /** Shadow vertical offset */
  shadowOffsetY?: number;
}

/**
 * CurvedDivider renders a smooth outward bulging curve to separate sections.
 * Uses an SVG path so it scales fluidly. Defaults to a white fill.
 */
const CurvedDivider: React.FC<CurvedDividerProps> = ({
  fill = '#ffffff',
  position = 'bottom',
  invert = false,
  variant = 'arc',
  bulge = 40,
  className = '',
  height = 120,
  lineOnly = false,
  stroke = '#e9e9ee',
  strokeWidth = 2,
  shadow = true,
  shadowColor = 'rgba(0,0,0,0.18)',
  shadowBlur = 8,
  shadowOffsetY = 4,
}) => {
  // ViewBox width set to 1440 for good scaling; the path scales responsively.
  // Two variants: a shallow arc and a soft wave.
  const arcPath = `M0,0 C 240,${bulge} 1200,${bulge} 1440,0`;
  const wavePath = `M0,0 C 300,${bulge + 10} 600,${-Math.max(10, bulge - 60)} 900,${Math.max(5, bulge - 30)} C 1140,${bulge} 1290,${Math.max(0, bulge - 10)} 1440,0`;
  const pathD = variant === 'wave' ? wavePath : arcPath;

  const transforms: string[] = [];
  // If placed at the top, rotate 180deg so it bulges into the next section
  if (position === 'top') transforms.push('rotate(180 720 80)');
  // Additional flip if requested
  if (invert) transforms.push('scale(-1,1) translate(-1440,0)');

  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {lineOnly ? (
          <>
            {shadow && (
              <defs>
                <filter id="ds" x="-20%" y="-50%" width="140%" height="200%">
                  <feDropShadow dx="0" dy={`${shadowOffsetY}`} stdDeviation={`${shadowBlur / 2}`} floodColor={shadowColor} />
                </filter>
              </defs>
            )}
            <g transform={transforms.join(' ')}>
              <path
                d={pathD}
                fill="none"
                stroke={stroke}
                strokeWidth={strokeWidth}
                filter={shadow ? 'url(#ds)' : undefined}
              />
            </g>
          </>
        ) : (
          <g transform={transforms.join(' ')}>
            <path d={`${pathD} L1440,160 L0,160 Z`} fill={fill} />
          </g>
        )}
      </svg>
    </div>
  );
};

export default CurvedDivider;
