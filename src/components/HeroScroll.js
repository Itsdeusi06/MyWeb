import { useEffect, useState } from 'react';
import './HeroScroll.css';

export default function HeroScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Increase the denominator to slow down the scroll scaling effect
  const progress = Math.min(scrollY /2000, 1); // Slower scaling progress (over more scroll distance)

  const bgOpacity = 1 - progress;
  const textOpacity = progress;
  
  // Start with a very big text and scale down to a smaller size (e.g., scale 0.1)
  const scale = 10 - 9.9 * progress; // From 10 → 0.1

  return (
    <div className="hero-scroll-section">
      <div
        className="background-layer"
        style={{ opacity: bgOpacity }}
      >
        <img src="/gameingPicture.jpg" alt="Background" />
      </div>

      <div
        className="centered-text"
        style={{
          opacity: textOpacity,
          transform: `translate(-50%, -95%) scale(${scale})`,
        }}
      >
        <h1>Itsdeusi06</h1>
      </div>
    </div>
  );
}
