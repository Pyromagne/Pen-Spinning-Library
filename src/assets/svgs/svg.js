import anchorsAway from "./anchors-away.svg";
import cage from "./cage.svg";
import fallingTriangles from "./falling-triangles.svg";
import glamorous from "./glamorous.svg";
import jigsaw from "./jigsaw.svg";
import overlappingCircles from "./overlapping-circles.svg";
import randomShapes from "./random-shapes.svg";
import topography from "./topography.svg";
import wiggle from "./wiggle.svg";

export const svg = [anchorsAway, cage, fallingTriangles, glamorous, jigsaw, overlappingCircles, randomShapes, topography, wiggle];

export function getRandomSvg() {
    if (!Array.isArray(svg) || svg.length === 0) {
      throw new Error("Input must be a non-empty array.");
    }
    
    const randomIndex = Math.floor(Math.random() * svg.length);
    return randomIndex;
}

export default svg;