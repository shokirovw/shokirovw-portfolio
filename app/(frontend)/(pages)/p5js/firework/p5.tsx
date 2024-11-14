// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';

import { useRef, useState } from "react";
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import p5Types from 'p5';

// Ensure that p5 code runs only in the browser
const isBrowser = typeof window !== "undefined";

function generatePropsForCanvas(container) {
  if (!container?.current) return null;

  const [containerWidth, containerHeight] = [
    container.current.clientWidth,
    container.current.clientHeight,
  ];
  const canvasWidth = Math.min(containerWidth, 500);
  const canvasHeight = canvasWidth * 0.67;
  const canvasDiameter = Math.sqrt(
    Math.pow(canvasWidth, 2) + Math.pow(canvasHeight, 2)
  );
  const scale = canvasDiameter / 700;

  return {
    width: canvasWidth,
    height: canvasHeight,
    diameter: canvasDiameter,
    scale,
    right: canvasWidth / 2,
    bottom: canvasHeight / 2,
  };
}

function sketchObject(parentElement) {
  if (!isBrowser) {
    return () => {};
  }

  let canvasProps;
  let increment = 0;

  return (p5: p5Types) => {
    p5.setup = () => {
      canvasProps = generatePropsForCanvas(parentElement);
      if (!canvasProps) return;
      p5.createCanvas(canvasProps.width, canvasProps.height);

      
    };

    class Particle {
      constructor(x, y) {
        this.pos = p5.createVector(x, y);
        this.vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
        this.acc = p5.createVector(0, 0.05);  // Gravity effect
        this.lifespan = 255;
      }
    
      update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.lifespan -= 2;  // Fade effect
      }
    
      show() {
        p5.stroke(16, 185, 129, this.lifespan);
        p5.strokeWeight(2);
        p5.point(this.pos.x, this.pos.y);
      }
    
      isOutside(width, height) {
        return this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height;
      }
    }

    let particles = [];

    p5.windowResized = () => {
      canvasProps = generatePropsForCanvas(parentElement);
      p5.resizeCanvas(canvasProps.width, canvasProps.height);
    };

    p5.draw = () => {
      p5.background(255, 10); // Faint background for a trailing effect
      let p = new Particle(p5.mouseX, p5.mouseY);
      particles.push(p);
      
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show(canvasProps.width, canvasProps.height);
        if (particles[i].isOutside()) {
          particles.splice(i, 1);
        }
      }


    }
  };
}

export default function P5JSSoundCircle() {
  const parentRef = useRef<HTMLDivElement>();
  const [showPermissionPrompt, setShowPermissionPrompt] = useState(true);
  const [permissionError, setPermissionError] = useState<string | null>(null);

  const handlePermissionClick = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setShowPermissionPrompt(false);
      setPermissionError(null);
    } catch (error) {
      setPermissionError("Microphone permission denied. Please allow access to use the sound effect.");
    }
  };

  return (
    <div>
        <p className="mt-2 mb-8 text-emerald-100">Try to hover over the board</p>
        <div ref={parentRef} className="rounded-3xl overflow-hidden max-w-[500px]">
          <NextReactP5Wrapper sketch={sketchObject(parentRef)} />
        </div>
    </div>
  );
}
