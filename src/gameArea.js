/*
 * gameArea
 *
 * class for the main game area
 */
import ActiveTetromino from "./activeTetromino";
import { GAME_GRID_HEIGHT, GAME_GRID_WIDTH, GRID_SIZE } from "./constants";
import * as PIXI from "pixi.js";

export default class GameArea {
  // width and height of blocks
  gameContainerW = GRID_SIZE * GAME_GRID_WIDTH;
  gameContainerH = GRID_SIZE * GAME_GRID_HEIGHT;
  pile = [];
  gameContainer = null;

  constructor() {
    // move container into position
    this.gameContainer = new PIXI.Container();
    this.gameContainer.width = this.gameContainerW;
    this.gameContainer.height = this.gameContainerH;
    this.gameContainer.x = 225;
    this.gameContainer.y = 30;

    // render container background
    const containerBackground = new PIXI.Graphics();
    containerBackground.beginFill(0xc6ecae);
    containerBackground.drawRect(
      0,
      0,
      this.gameContainerW,
      this.gameContainerH
    );
    containerBackground.endFill();
    this.gameContainer.addChild(containerBackground);

    // test
    const g1 = new PIXI.Graphics();
    this.gameContainer.addChild(g1);

    // render initial active block
    this.activeTetromino = new ActiveTetromino(this.gameContainer);
    this.gameContainer.addChild(this.activeTetromino.container);
  }

  tick() {
    this.activeTetromino.tick();
  }
}
