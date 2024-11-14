

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
  const canvasHeight = canvasWidth;
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

      p5.colorMode(p5.HSB);
      p5.noStroke();
      p5.textAlign(p5.CENTER, p5.CENTER);
    };

    p5.windowResized = () => {
      canvasProps = generatePropsForCanvas(parentElement);
      p5.resizeCanvas(canvasProps.width, canvasProps.height);
    };

    let dir = 'f';

    p5.draw = () => {
      let colorA = p5.color(50, increment, 100);
      let colorB = p5.color(300, increment, 20);

      // increment: 0 => x = 0
      // increment: 100 => x = 360
      // increment: y => x

      

      let stripeCount = 12;
      let stripeHeight = canvasProps.height / stripeCount;

      for (let y = 0; y < canvasProps.height; y += stripeHeight) {
        let fadeAmount = y / canvasProps.height;
        let betweenColor = p5.lerpColor(colorA, colorB, fadeAmount);
        p5.fill(betweenColor);
        p5.rect(0, y, canvasProps.width, stripeHeight);
      }

      // Top color
      // Hue: 100°, Saturation: 90%, Brightness: 100%

      
      let margin = 7;
      let boxWidth = 120;
      let cornerRadius = 10;
      
      p5.fill(255);
      p5.rect(margin, margin, boxWidth, Math.max(stripeHeight - margin * 2, 20), cornerRadius);
      p5.rect(margin, canvasProps.height - stripeHeight + margin, boxWidth, Math.max(stripeHeight - margin * 2, 20), cornerRadius);

      p5.fill(0);
      p5.text(`HSB(100, ${increment}, 100)`, margin, margin, boxWidth, Math.max(stripeHeight - margin * 2, 20));
      p5.text(`HSB(250, ${increment}, 20)`, margin, canvasProps.height - stripeHeight + margin, boxWidth, Math.max(stripeHeight - margin * 2, 20));

      if (increment == 100) {
        dir = 'b';
      } else if (increment == 1) {
        dir = 'f'
      }

      if (dir == 'f') {
        increment++;
      } else {
        increment--;
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
        <p className="mt-2 mb-8 text-emerald-100">Let's make some noise!</p>
        <div ref={parentRef} className="">
          <NextReactP5Wrapper sketch={sketchObject(parentRef)} />
        </div>
    </div>
  );
}
