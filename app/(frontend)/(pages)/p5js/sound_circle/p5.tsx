// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';

import React, { Ref, useRef, useState , useEffect} from "react";
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import p5Types from 'p5';
import dynamic from 'next/dynamic';

// Dynamically import p5 class
import * as P5Class from "p5"
import "p5/lib/addons/p5.sound"



function generatePropsForCanvas (container) {
  if (!container?.current) {
    return null;
}

    let isMinimal;

    if (window.innerWidth >= 640 && window.innerWidth < 1024) {
      isMinimal = true;
    } else {
      isMinimal = false;
    }

    let [containerWidth, containerHeight] = [container.current.clientWidth, container.current.clientHeight];
    let canvasWidth = containerWidth;
    let canvasHeight = (isMinimal ? canvasWidth / 2.2 : canvasWidth / 1.2);

    let canvasDiameter = Math.sqrt(Math.pow(canvasWidth, 2) + Math.pow(canvasHeight, 2));
    let scale = canvasWidth / 720;

    

    // 720 596 (Scale: 934.67 | Torus: 98 28)             
    // width   width/1.2

    // RIGHT: 364
    // BOTTOM: 303.33

    // 934.67 => 1
    // diameter => x

    return {
        width: canvasWidth,
        height: canvasHeight,
        diameter: canvasDiameter,
        scale,
        right: canvasWidth / 2,
        bottom: canvasHeight / 2,
        isMinimal
    }
}

function sketchObject (parentElement) {
    let canvasProps;

    let increment = 0;
    let mic, audioContext, analyser;
    let userInteracted = false;
let sensitivity = 10;  // Sensitivity for sound input
let smoothing = 0.06;  // Smoothing factor for transition
let positionSmoothing = 0.05; // Smoothing factor for position movement
let numCircles = 5;    // Number of ripple circles
let circles = [];      // Array to hold circle layers

let centerX, centerY;
let circleX, circleY;
let maxOffset = 50; // Maximum offset distance from center

    return (p5: p5Types) => {
        p5.setup = () => {
            
            canvasProps = generatePropsForCanvas(parentElement);
            if (!canvasProps) return;
            p5.createCanvas(canvasProps.width, canvasProps.height, p5.WEBGL);

            
            try {
              audioContext = new (window.AudioContext || window.webkitAudioContext)();
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
                size: 100,
                targetSize: 100,
                opacity: p5.map(i, 0, numCircles - 1, 255, 50) // Gradual fade for each layer
              });
            }
            
            centerX = canvasProps.width / 2;
            centerY = canvasProps.height / 2;
            circleX = centerX;
            circleY = centerY;
        }

        p5.windowResized = () => {
            canvasProps = generatePropsForCanvas(parentElement);
            p5.resizeCanvas(canvasProps.width, canvasProps.height);
        }

        p5.draw = () => {
          if (!canvasProps) return;
          p5.background(255);
    
          const dataArray = new Uint8Array(analyser.fftSize);
            analyser.getByteFrequencyData(dataArray);
            let vol = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
            let amplifiedVol = (vol / 255) * sensitivity;
        
          // Calculate the target size based on sound level
          let baseSize = p5.map(amplifiedVol, 0, 1, 100, 500);
          
          // Calculate direction vector from the center to the cursor
          let dx = p5.mouseX - centerX;
          let dy = p5.mouseY - centerY;
          
          // Limit the offset to maxOffset distance
          let distance = p5.dist(centerX, centerY, p5.mouseX, p5.mouseY);
          let limitedDistance = p5.min(distance, maxOffset);
          
          // Calculate the new target position with limited offset
          let targetX = centerX + (dx / distance) * limitedDistance;
          let targetY = centerY + (dy / distance) * limitedDistance;
        
          // Smoothly interpolate the circle's position towards the target
          circleX = p5.lerp(circleX, targetX, positionSmoothing);
          circleY = p5.lerp(circleY, targetY, positionSmoothing);
        
          // Smoothly transition each circle's size to the target size, staggered for effect
          for (let i = 0; i < numCircles; i++) {
            let circle = circles[i];
            let sizeOffset = Math.pow(i, 2) * 10; // Increase each layer's target size slightly
        
            // Update target size and smoothly transition size
            circle.targetSize = baseSize + sizeOffset;
            circle.size = p5.lerp(circle.size, circle.targetSize, smoothing);
        
            // Calculate opacity for each circle
            let opacity = circle.opacity;
            
            let r = p5.map(i, 0, numCircles - 1, 0, 150);
            let g = p5.map(i, 0, numCircles - 1, 100, 255);
            let b = p5.map(i, 0, numCircles - 1, 200, 255);
        
            // Draw the circle layer
            p5.fill(r, g, b, opacity); // Set fill color with transparency
            p5.noStroke();
            p5.ellipse(circleX, circleY, circle.size, circle.size);
          }
            ++increment;
        }
  }
}


// export default function P5JSSoundCircle() {
//   let parentRef = useRef<HTMLDivElement>();

//   useEffect(() => {
//       // Dynamically import p5.sound to initialize it correctly
//       if (window) {
//         window.p5 = P5Class;
//         import("p5/lib/addons/p5.sound").catch((error) =>
//           console.error("Failed to load p5.sound:", error)
//         );
//       }
//     }, []);


//   return (
//     <div ref={parentRef}>
//         <NextReactP5Wrapper sketch={sketchObject(parentRef)} />
//     </div>
//   );
// }


export default function P5JSSoundCircle() {
  const parentRef = useRef<HTMLDivElement>();
  const [showPermissionPrompt, setShowPermissionPrompt] = useState(true);
  const [permissionError, setPermissionError] = useState<string | null>(null);

  const handlePermissionClick = async () => {
    try {
      // Request microphone access
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setShowPermissionPrompt(false); // Hide the permission prompt if successful
      setPermissionError(null); // Clear any previous errors
    } catch (error) {
      setPermissionError("Microphone permission denied. Please allow access to use the sound effect.");
    }
  };

  return (
    <div ref={parentRef}>
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
        <NextReactP5Wrapper sketch={sketchObject(parentRef)} />
      )}
    </div>
  );
}

