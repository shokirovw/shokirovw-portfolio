// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';

import { useRef } from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import p5Types from 'p5';
import { useState } from "react";

function createTorusDrawer() {
    return (p5, cp, increment) => {
        p5.push();
        p5.fill(254, 240, 138, 20);
        p5.stroke(250, 204, 21, 60);
        p5.strokeWeight(0.7);

        p5.translate(cp.right * 0.508, cp.bottom * -0.23);

        p5.rotateX(45);
        p5.rotateY(18);
        p5.rotateZ(increment);
        p5.torus(98 * cp.scale, 28 * cp.scale);
        p5.pop();
    };
}

function createSphereDrawer() {
    return (p5, cp, increment) => {
        p5.push();
        p5.fill('#64748b66');
        p5.stroke('#e2e8f073');
        p5.strokeWeight(0.4);

        p5.translate(cp.right * 0.824, cp.bottom * -0.66);
        p5.rotateX(-10);
        p5.rotateY(increment)
        p5.sphere(30 * cp.scale);
        p5.pop();
    };
}

function createCircleDrawer() {
    return (p5, cp, increment) => {
        let angle = p5.frameCount % 360;

        let circleX = cp.right * -0.549;
        let circleY = cp.bottom * -0.791;
        let circleRadius = 85 * cp.scale;
        let diameter = circleRadius * 2;

        p5.push();
        p5.fill('#6366f136');
        p5.stroke('#a5b4fc');
        p5.strokeWeight(1.4);
        p5.rotateX(30);
        p5.circle(circleX, circleY, diameter);

        let pointX = circleX + circleRadius * p5.cos(angle);
        let pointY = circleY - circleRadius * p5.sin(angle);

        p5.line(circleX, circleY, pointX, pointY);
        p5.noStroke();
        p5.fill('#e0e7ff');
        p5.circle(pointX, pointY, 10 * cp.scale);
        p5.pop();
    };
}

function createFullGraphDrawer () {
    return (p5, cp, increment) => {
        let angle = p5.frameCount % 360;

        let graphLeftX = -cp.right * 0.98;
        let graphRightX = cp.right * 0.98;
        let graphCenterY = cp.bottom * (cp.isMinimal ? 0 : 0.637);
        let graphAmplitude = 70 * cp.scale;

        // Draw graph
        p5.push();
        p5.stroke('#eef2ff3d');
        p5.strokeWeight(1.3);
        p5.line(graphLeftX, graphCenterY, graphRightX, graphCenterY);
        p5.line(graphLeftX, graphCenterY - graphAmplitude, graphLeftX, graphCenterY + graphAmplitude); 
        p5.line(graphRightX, graphCenterY - graphAmplitude, graphRightX, graphCenterY + graphAmplitude);
        p5.pop();

        // Draw cosine curve
        p5.noFill();
        p5.stroke('#4ade80');
        p5.beginShape();

        for (let t = 0; t <= 360; t++) {
            let x = p5.map(t, 0, 360, graphLeftX, graphRightX);
            let y = graphCenterY - graphAmplitude * p5.cos(t);
            p5.vertex(x, y);
        }

        p5.endShape();

        // Draw sine curve
        p5.noFill();
        p5.stroke('#67e8f9');
        p5.beginShape();

        for (let t = 0; t <= 360; t++) {
            let x = p5.map(t, 0, 360, graphLeftX, graphRightX);
            let y = graphCenterY - graphAmplitude * p5.sin(t);
            p5.vertex(x, y);
        }

        p5.endShape();

        // Draw moving line
        let lineX = p5.map(angle, 0, 360, graphLeftX, graphRightX);
        p5.stroke('#fcd34d');

        p5.line(lineX, graphCenterY - graphAmplitude, lineX, graphCenterY + graphAmplitude);

        // Draw moving points on graph
        let orangeY = graphCenterY - graphAmplitude * p5.cos(angle);
        let redY = graphCenterY - graphAmplitude * p5.sin(angle);

        p5.noStroke();

        p5.fill('#22c55e');
        p5.circle(lineX, orangeY, 10 * cp.scale);

        p5.fill('#06b6d4');
        p5.circle(lineX, redY, 10 * cp.scale);
    };
}


function createStepDrawer() {
    let how_many_columns_to_render = 1;
    let which_column_is_animated = 0;
    let animated_column_height_ratio = 0;
    let is_backward_motion = false;
    let cycle = -1;
    let ease_array = [0.3, 0.4, 0.2, 0.1, 0.3, 0.5, 0.6]
    let easing = ease_array[0];

    return (p5, cp, increment) => {
        for (let i = 0; i < how_many_columns_to_render; i++){ 
            let column_min_height = 30 * cp.scale;
            let consecutive_increase_in_height = 12 * cp.scale;
            let column_color = p5.lerpColor(p5.color(16, 185, 20), p5.color(59, 130, 246), p5.map(i,0,13,0,1));
            
            p5.fill(column_color);
            p5.stroke('#99f6e478')
    
            let column_target_height = -(column_min_height + consecutive_increase_in_height * i);

            if (which_column_is_animated == i) {
                animated_column_height_ratio += (is_backward_motion ? -1 : 1) * (1 - animated_column_height_ratio) * easing;
                if (animated_column_height_ratio >= 0.999) {
                    animated_column_height_ratio = 1;
                }

                column_target_height *= animated_column_height_ratio;

                if (animated_column_height_ratio >= 1) {
    
                    if (how_many_columns_to_render == 13) {
                      is_backward_motion = true;
                    } else if (how_many_columns_to_render == 1) {
                      is_backward_motion = false;
        
                      cycle++;
        
                      if (cycle > 6) {
                        cycle = 0;
                      }
        
                      easing = ease_array[cycle];
                    } 
        
                    if (is_backward_motion) {
                      how_many_columns_to_render--;
                      which_column_is_animated--;
                      animated_column_height_ratio = 1;
                    } else {
                      how_many_columns_to_render++;
                      which_column_is_animated++;
                      animated_column_height_ratio = 0;
                    }
                  } 
            }
    
            p5.rect(cp.right * -0.78 + i * 20 * cp.scale, cp.bottom * 0.198, 20 * cp.scale, column_target_height);

            // bottom: 303.33333333333337
            // diameter: 947.6436273433408
            // height: 606.6666666666667
            // right: 364
            // scale: 1.0138804362431026
            // width: 728
          }
    };
}


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

function sketchObject (parentElement, setOkWeAreOn): Sketch {
    let drawTorus = createTorusDrawer();
    let drawSphere = createSphereDrawer();
    let drawCircleAndPoints = createCircleDrawer();
    let drawFullGraph = createFullGraphDrawer();
    let drawStep = createStepDrawer();

    let canvasProps;

    let increment = 0;

    return (p5: p5Types) => {
        p5.setup = () => {
            canvasProps = generatePropsForCanvas(parentElement);
            if (!canvasProps) return;
            p5.createCanvas(canvasProps.width, canvasProps.height, p5.WEBGL);
            p5.angleMode(p5.DEGREES);

            setOkWeAreOn(true);
        }

        p5.windowResized = () => {
            canvasProps = generatePropsForCanvas(parentElement);
            p5.resizeCanvas(canvasProps.width, canvasProps.height);
        }


        p5.draw = () => {
          if (!canvasProps) return;
            p5.clear();

            p5.orbitControl();

            if (!canvasProps.isMinimal) {
              drawTorus(p5, canvasProps, increment);

              drawSphere(p5, canvasProps, increment);

              drawCircleAndPoints(p5, canvasProps, increment);

              drawStep(p5, canvasProps, increment);
            }

            

            drawFullGraph(p5, canvasProps, increment);

            

            ++increment;
        }

        // p5.mousePressed = () => {
        //     console.log(canvasProps);
        // }
  }
}


export default function P5JSSketch({ setOkWeAreOn }) {
  let parentRef = useRef<HTMLDivElement>();

  return (
    <div className="w-full" ref={parentRef}>
        <NextReactP5Wrapper sketch={sketchObject(parentRef, setOkWeAreOn)} />
    </div>
  );
}