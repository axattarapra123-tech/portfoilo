import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; // Disable custom cursor on mobile/touch screens

    const mousePos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };

    const onMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      if (hidden) setHidden(false);
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    // Track links, buttons, and custom interactive items for hover effects
    const addHoverEvents = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .interactive-hover');
      interactives.forEach((el) => {
        // Prevent duplicate event listeners
        if (el.dataset.hasCursorEvents) return;
        
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
        el.dataset.hasCursorEvents = 'true';
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);
    
    addHoverEvents();
    
    // Periodically re-add hover events to dynamically rendered elements
    const interval = setInterval(addHoverEvents, 1000);

    // Animation loop for smooth ring lag (lerp)
    let animationFrameId;
    const render = () => {
      const lerpSpeed = 0.15;
      ringPos.x += (mousePos.x - ringPos.x) * lerpSpeed;
      ringPos.y += (mousePos.y - ringPos.y) * lerpSpeed;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.classList.remove('custom-cursor-active');
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hidden]);

  return (
    <>
      {/* Tiny solid dot that instantly follows the cursor */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      {/* Outer ring that lags smoothly behind the dot */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-2 border-primary/50 hidden lg:block transition-[width,height,background-color,border-color] duration-300 ease-out ${
          hovered
            ? 'w-14 h-14 bg-primary/10 border-primary/80 scale-110'
            : clicked
            ? 'w-6 h-6 bg-secondary/20 border-secondary'
            : 'w-8 h-8'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  );
};

export default CustomCursor;
