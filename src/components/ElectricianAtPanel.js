import React from 'react';
import Svg, { Rect, Circle, Path, Line, Text } from 'react-native-svg';

const ElectricianAtPanel = ({ width = 200, height = 250, skinTone = "#8d5524", clothing = "#333" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 100 125"
  >
    {/* Background Panel (Box) */}
    <Rect x="55" y="30" width="40" height="70" rx="3" fill="#e0e0e0" stroke="#999" strokeWidth="1" />
    
    {/* Breakers/Switches in the box */}
    <Rect x="60" y="35" width="10" height="15" fill="#ff4d4d" />
    <Rect x="60" y="55" width="10" height="15" fill="#4d4dff" />
    <Rect x="75" y="35" width="10" height="15" fill="#ff4d4d" />
    <Rect x="75" y="55" width="10" height="15" fill="#4d4dff" />
    <Rect x="60" y="75" width="25" height="20" fill="#cccccc" />

    {/* Figure */}
    {/* Body */}
    <Rect x="5" y="50" width="30" height="50" fill={clothing} />
    {/* Head */}
    <Circle cx="20" cy="40" r="12" fill={skinTone} />
    {/* Hood/Cap to suggest concealment */}
    <Path d="M8 35 Q 20 20, 32 35 L 32 38 Q 20 48, 8 38 Z" fill="#222" />
    {/* Arm reaching to panel */}
    <Path d="M35 60 L 50 55 L 50 65 L 35 70 Z" fill={clothing} />
    {/* Hand on box */}
    <Rect x="48" y="53" width="5" height="10" fill={skinTone} />
    {/* Tool (wire cutter/screwdriver) */}
    <Line x1="50" y1="58" x2="58" y2="50" stroke="#d9534f" strokeWidth="1.5" />

    {/* Legs */}
    <Rect x="5" y="100" width="15" height="15" fill={clothing} />
    <Rect x="20" y="100" width="15" height="15" fill={clothing} />

    {/* Warning sparks to indicate tampering */}
    <Path d="M60 30 L63 25 L66 30 L63 35 Z" fill="#ff6b35" />
    <Path d="M70 40 L73 35 L76 40 L73 45 Z" fill="#ff6b35" />
  </Svg>
);

export default ElectricianAtPanel;
