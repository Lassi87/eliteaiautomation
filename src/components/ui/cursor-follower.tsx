import React, { useEffect, useRef, useState } from 'react';

interface CursorFollowerProps {
  imageUrl?: string;
  size?: number;
  offsetX?: number;
  offsetY?: number;
  smoothness?: number;
  disabled?: boolean;
}

const CursorFollower: React.FC<CursorFollowerProps> = ({
  imageUrl = "/ChatGPT Image 1. lokak. 2025 klo 14.31.27.png",
  size = 80,
  offsetX = 15,
  offsetY = 15,
  smoothness = 0.1,
  disabled = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<number>();
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || disabled) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Update target position with offset
      targetPosition.current = {
        x: e.clientX + offsetX,
        y: e.clientY + offsetY
      };

      // Show cursor follower
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth animation loop
    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Lerp (linear interpolation) for smooth movement
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * smoothness;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * smoothness;

      // Handle edge cases - keep image within viewport
      const maxX = window.innerWidth - size;
      const maxY = window.innerHeight - size;
      
      currentPosition.current.x = Math.max(0, Math.min(currentPosition.current.x, maxX));
      currentPosition.current.y = Math.max(0, Math.min(currentPosition.current.y, maxY));

      setPosition({
        x: currentPosition.current.x,
        y: currentPosition.current.y
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imageUrl, size, offsetX, offsetY, smoothness, disabled, isVisible]);

  // Don't render if disabled or user prefers reduced motion
  if (disabled || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  return (
    <img
      ref={imageRef}
      src={imageUrl}
      alt="Cursor follower"
      className={`
        fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 select-none
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(${position.x}px, ${position.y}px)`,
        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
        mixBlendMode: 'normal',
        backgroundColor: 'transparent',
        willChange: 'transform'
      }}
      draggable={false}
      onLoad={() => {
        // Ensure image is loaded before showing
        if (imageRef.current) {
          imageRef.current.style.visibility = 'visible';
        }
      }}
    />
  );
};

export default CursorFollower;