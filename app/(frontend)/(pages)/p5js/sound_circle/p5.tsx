

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
  let mic, audioContext, analyser;
  let sensitivity = 12;
  let smoothing = 0.06;
  let positionSmoothing = 0.05;
  let numCircles = 5;
  let circles = [];
  let centerX, centerY;
  let circleX, circleY;
  let maxOffset = 80;

  return (p5: p5Types) => {
    p5.setup = () => {
      canvasProps = generatePropsForCanvas(parentElement);
      if (!canvasProps) return;
      p5.createCanvas(canvasProps.width, canvasProps.height, p5.WEBGL);

      // Only initialize audio context and analyzer on client side
      try {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        analyser = audioContext.createAnalyser();

        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          mic = audioContext.createMediaStreamSource(stream);
          mic.connect(analyser);
        });
      } catch (error) {
        console.error("Audio setup failed:", error);
      }

      // Initialize circle layers with initial sizes and opacities
      for (let i = 0; i < numCircles; i++) {
        circles.push({
          size: 100 * canvasProps.scale,
          targetSize: 100 * canvasProps.scale,
          opacity: p5.map(i, 0, numCircles - 1, 255, 50),
        });
      }

      centerX = canvasProps.right * 0;
      centerY = canvasProps.bottom * 0;
      circleX = centerX;
      circleY = centerY;
    };

    p5.windowResized = () => {
      canvasProps = generatePropsForCanvas(parentElement);
      p5.resizeCanvas(canvasProps.width, canvasProps.height);
    };

    p5.draw = () => {
      if (!canvasProps) return;
      p5.background(255);

      const dataArray = new Uint8Array(analyser.fftSize);
      analyser.getByteFrequencyData(dataArray);
      let vol = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
      let amplifiedVol = (vol / 255) * sensitivity;

      // Calculate the target size based on sound level
      let baseSize = p5.map(amplifiedVol, 0, 1, 100 * canvasProps.scale, 500 * canvasProps.scale);

      // Smoothly interpolate the circle's position towards the target
      circleX = 0;
      circleY = 0;

      // Smoothly transition each circle's size to the target size, staggered for effect
      for (let i = 0; i < numCircles; i++) {
        let circle = circles[i];
        let sizeOffset = Math.pow(i, 2) * (10 * canvasProps.scale);

        // Update target size and smoothly transition size
        circle.targetSize = baseSize + sizeOffset;
        circle.size = p5.lerp(circle.size, circle.targetSize, smoothing);

        // Calculate opacity for each circle
        let opacity = circle.opacity;

        let r = p5.map(i, 0, numCircles - 1, 0, 150);
        let g = p5.map(i, 0, numCircles - 1, 100, 255);
        let b = p5.map(i, 0, numCircles - 1, 200, 255);

        // Draw the circle layer
        p5.fill(r, g, b, opacity);
        p5.noStroke();
        p5.ellipse(circleX, circleY, circle.size, circle.size);
      }
    };
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
      {showPermissionPrompt && (
        <div className="mt-10">
          <p className="text-emerald-200 mb-2">
            Please click the button below to enable microphone access for the sound effect.
          </p>
          <button
            onClick={handlePermissionClick}
            className="px-4 py-2 text-base text-emerald-200 bg-emerald-500/80 rounded-xl"
          >
            Enable Microphone
          </button>
        </div>
      )}
      {permissionError && (
        <div className="mt-4 text-red-500">
          <p>{permissionError}</p>
        </div>
      )}
      {!showPermissionPrompt && (
        <>
        <p className="mt-2 mb-8 text-emerald-100">Let's make some noise!</p>
        <div ref={parentRef} className="rounded-3xl overflow-hidden max-w-[500px]">
          <NextReactP5Wrapper sketch={sketchObject(parentRef)} />
        </div>
        </>
      )}
    </div>
  );
}
