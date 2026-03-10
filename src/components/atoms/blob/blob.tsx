import React, { useState } from 'react';

interface BlobProps {
  color: string;
  width: string;
  height: string;
  borderRadius: string;
  morphRadius?: string;
  rotation?: number;
  hoverRotation?: number;
  hoverScale?: number; 
  className?: string;
}

export const Blob: React.FC<BlobProps> = ({ 
  color, 
  width, 
  height, 
  borderRadius, 
  morphRadius,
  rotation = 0,
  hoverRotation = 0,
  hoverScale = 1.05,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const currentRadius = isHovered && morphRadius ? morphRadius : borderRadius;
  const currentRotation = isHovered ? rotation + hoverRotation : rotation;
  const currentScale = isHovered ? hoverScale : 1;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer ${className}`}
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        borderRadius: currentRadius,
        transform: `rotate(${currentRotation}deg) scale(${currentScale})`,
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth organic transition
      }}
    />
  );
};