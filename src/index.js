import * as PIXI from "pixi.js";
import GameContainer from "./gameContainer";

// set up applicaiton
const appW = 750;
const appH = 600;

const app = new PIXI.Application({
  width: appW,
  height: appH,
  backgroundColor: 0x94c9a9,
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

// set up game container
const gameContainer = new GameContainer(PIXI, app);

// update game state every second
let time = 0;
let tick = 0;
const tickLength = 1;
app.ticker.add((delta) => {
  const deltaMs = delta / 60;
  if (time + deltaMs > tick + tickLength) {
    tick += 1;
    console.log("tick", tick);
    gameContainer.tick();
  }
  time += deltaMs;
});
