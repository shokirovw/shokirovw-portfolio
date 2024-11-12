'use client';

import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export function useAmbienceControls () {
    const controls = useAnimation();
  
    const startAmbientMotion = () => {
      controls.start({
        x: [0, randomRange(-10, 10), randomRange(-20, 20)],
        y: [0, randomRange(-10, 10), randomRange(-20, 20)],
        transition: {
          duration: randomRange(2, 4), // Vary the duration for a more natural effect
          ease: "easeInOut",
          repeat: Infinity, // Loop the animation
          repeatType: "mirror", // Alternate direction
        },
      });
    };
  
    const randomRange = (min: any, max: any) => Math.random() * (max - min) + min;
  
    useEffect(() => {
      startAmbientMotion();
    }, []);
  
    return controls;
}

export function useAmbienceControlsHorizontalOnly () {
  const controls = useAnimation();

  const startAmbientMotion = () => {
    controls.start({
      x: [0, randomRange(-10, 10), randomRange(-20, 20)],
      transition: {
        duration: randomRange(2, 4), // Vary the duration for a more natural effect
        ease: "easeInOut",
        repeat: Infinity, // Loop the animation
        repeatType: "mirror", // Alternate direction
      },
    });
  };

  const randomRange = (min: any, max: any) => Math.random() * (max - min) + min;

  useEffect(() => {
    startAmbientMotion();
  }, []);

  return controls;
}

