'use client';

import React, { Ref, useRef } from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import '../(frontend)/_lib/global_styles.css';
import p5Types from 'p5';

function getWidthAndHeight (parentElement) {
    return [parentElement.current.clientWidth, parentElement.current.clientHeight];
} 



function sketchObject (parentElement): Sketch {
  return (p5: p5Types) => {
    p5.setup = () => {
      let [width, height] = getWidthAndHeight(parentElement);
      p5.createCanvas(width, height, p5.WEBGL);
      p5.angleMode(p5.DEGREES);
    }

    p5.windowResized = () => {
        let [width, height] = getWidthAndHeight(parentElement);
        p5.resizeCanvas(width, height);
    }

    let increment = 0;
    let color = 1;
    let direction = 'f';

    let circleX = -200;
    let circleY = -240;
    let circleRadius = 85;

    let colorA = p5.color(16, 185, 20);
    let colorB = p5.color(59, 130, 246);

    let how_many_columns_to_render = 1;
    let which_column_is_animated = 0;
    let animated_column_height_ratio = 0;
    let is_backward_motion = false;
    let cycle = -1;
    let ease_array = [0.3, 0.4, 0.2, 0.1, 0.3, 0.5, 0.6]
    let easing = ease_array[0];


    p5.draw = () => {
      let [width, height] = getWidthAndHeight(parentElement);

      let graphX = -width/2 + 70;
      let graphAmplitude = 70;
      let graphY = height/2-graphAmplitude-40;
      let graphPeriod = width - 70;

      p5.background("orange");

      for (let i = 0;i<how_many_columns_to_render;i++){ 
        let position = p5.map(i,0,13,0,1);
        let LerpedColor = p5.lerpColor(colorA,colorB,position);
        
        p5.fill(LerpedColor);
        p5.stroke('#99f6e478')

        let target_height = (-30 - i * 12);
        

        if (i == which_column_is_animated) {
          animated_column_height_ratio += (is_backward_motion ? -1 : 1) * (1 - animated_column_height_ratio) * easing;
          if (animated_column_height_ratio >= 0.999) animated_column_height_ratio = 1;
          target_height *= animated_column_height_ratio;
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

        p5.rect(-width/2 + 80 + i * 20, 60, 20, target_height);
      }

      

      

      // Drawing Torus
      p5.push();
      p5.fill(254, 240, 138, 20);
      // p5.noFill();
      p5.stroke(250, 204, 21, 60);
      p5.strokeWeight(0.7);
      p5.translate(185, -70);
      p5.rotateX(45);
      p5.rotateY(18);
      p5.rotateZ(increment);
      p5.torus(140 * 0.7, 40 * 0.7);
      p5.pop();



      // Drawing Sphere
      p5.push();
      p5.fill('#64748b66');
      p5.stroke('#e2e8f073');
      p5.strokeWeight(0.4);
      p5.translate(300, -200)
      p5.rotateX(-10);
      p5.rotateY(increment)
      p5.sphere(30);
      p5.pop();



      increment++;
      if (color == 255) {
        direction = 'b';
      } else if (color == 0) {
        direction = 'f';
      }

      if (direction == 'f') {
        color++;
      } else {
        color--;
      }





      let angle = p5.frameCount % 360;

      // Drawing circle
      p5.push();
      p5.fill('#6366f136');
      p5.stroke('#a5b4fc');
      p5.strokeWeight(1.4);
      p5.rotateX(30);
      p5.circle(circleX, circleY, 2 * circleRadius);


      // Draw moving points
      let pointX = circleX + circleRadius * p5.cos(angle);
      let pointY = circleY - circleRadius * p5.sin(angle);

      p5.line(circleX, circleY, pointX, pointY);
      p5.noStroke();
      p5.fill('#e0e7ff');
      p5.circle(pointX, pointY, 10);
      p5.pop();






      // Draw graph
      p5.push();
      p5.stroke('#eef2ff3d');
      p5.strokeWeight(1.3);
      p5.line(graphX, graphY, graphX + width, graphY); // horizontal line
      p5.line(graphX + 1, graphY - graphAmplitude, graphX + 1, graphY + graphAmplitude); // left vertical line
      p5.line(width/2 - 1, graphY - graphAmplitude, width/2 - 1, graphY + graphAmplitude); // right vertical line
      p5.pop();






      // Draw cosine curve
      p5.noFill();
      p5.stroke('#4ade80');
      p5.beginShape();
      for (let t = 0; t <= 360; t++) {
        let x = p5.map(t, 0, 360, graphX, graphX + graphPeriod);
        let y = graphY - graphAmplitude * p5.cos(t);
        p5.vertex(x, y);
      }
      p5.endShape();






      // Draw sine curve
      p5.noFill();
      p5.stroke('#67e8f9');
      p5.beginShape();
      for (let t = 0; t <= 360; t++) {
        let x = p5.map(t, 0, 360, graphX, graphX + graphPeriod);
        let y = graphY - graphAmplitude * p5.sin(t);
        p5.vertex(x, y);
      }
      p5.endShape();






      // Draw moving line
      let lineX = p5.map(angle, 0, 360, graphX, graphX + graphPeriod);
      p5.stroke('#fcd34d');
      p5.line(lineX, graphY - graphAmplitude, lineX, graphY + graphAmplitude);






      // Draw moving points on graph
      let orangeY = graphY - graphAmplitude * p5.cos(angle);
      let redY = graphY - graphAmplitude * p5.sin(angle);

      p5.noStroke();

      p5.fill('#22c55e');
      p5.circle(lineX, orangeY, 10);

      p5.fill('#06b6d4');
      p5.circle(lineX, redY, 10);
    }
  }
}

export default function TryP5js () {
    let parentRef = useRef<HTMLDivElement>();

    return (
        <div className="w-full h-screen p-10">
            <div className='w-1/2 h-full' ref={parentRef}>
                <NextReactP5Wrapper sketch={sketchObject(parentRef)}  />
            </div>
        </div>
    )
}