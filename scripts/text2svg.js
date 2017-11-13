/* Generate svg from text
 * To run this script:
 *     $ npm run svg
 */

const TextToSVG = require('text-to-svg');
const fs = require("fs");

console.log("Generating SVG.");

const textToSVG = TextToSVG.loadSync('scripts/fonts/lora-v12-latin-italic.otf');
const attributes = {fill: 'none', stroke: 'darkgrey'};
const options = {x: 0, y: 0, fontStyle: 'italic', fontSize: 86, anchor: 'top', attributes: attributes};
const svg = textToSVG.getSVG('72web', options);
fs.writeFileSync("public/logo.svg", svg);

console.log("ok");
