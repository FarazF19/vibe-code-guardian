
import React, { useRef, useEffect } from 'react';

const MatrixBackground: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Generate characters
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const columns = Math.floor(canvas.width / 20); // Character width
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }
    
    // Set text color based on theme
    const getColor = () => {
      if (theme === 'light') {
        return 'rgba(0, 115, 255, 0.15)'; // Lighter blue for light mode
      }
      return 'rgba(135, 0, 255, 0.15)'; // Purple for dark mode
    };
    
    // Drawing animation
    const draw = () => {
      // Semi-transparent background to create fade effect
      ctx.fillStyle = theme === 'light'
        ? 'rgba(255, 255, 255, 0.04)'
        : 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set the text style
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        // Generate random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Use different shades of the theme colors for depth
        if (Math.random() > 0.98) {
          ctx.fillStyle = theme === 'light' 
            ? 'rgba(0, 92, 204, 0.9)' // Bright blue for light mode
            : 'rgba(135, 0, 255, 0.9)'; // Bright purple for dark mode
        } else if (Math.random() > 0.90) {
          ctx.fillStyle = theme === 'light'
            ? 'rgba(0, 115, 255, 0.6)' // Medium blue for light mode
            : 'rgba(155, 51, 255, 0.6)'; // Medium purple for dark mode
        } else {
          ctx.fillStyle = getColor();
        }
        
        // Draw the character
        ctx.fillText(text, i * 20, drops[i]);
        
        // Move drops
        drops[i] += Math.random() * 2 + 1;
        
        // Reset when off the screen + random factor to avoid uniform streams
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -100);
        }
      }
    };
    
    // Animation loop
    const interval = setInterval(draw, 50);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

export default MatrixBackground;
