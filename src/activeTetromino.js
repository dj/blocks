/*
 * ActiveTetromino
 *
 * The currently falling block
 */
import * as PIXI from "pixi.js";
import { GRID_SIZE, TETROMINOES } from "./constants";

export default class ActiveTetromino {
  constructor() {
    this.color = 0xfe5f55;
    this.shape = "z";
    this.rotation = 0;

    // set up initial position
    this.pos = { x: 0, y: 0 };

    this.container = new PIXI.Container();
    this.container.x = this.pos.x * GRID_SIZE;
    this.container.y = this.pos.y * GRID_SIZE;
    this.graphic = new PIXI.Graphics();

    // render block
    for (const [x, y] of TETROMINOES[this.shape][this.rotation]) {
      this.graphic.beginFill(0xffffff);
      this.graphic.drawRect(x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
      this.graphic.endFill();
    }
    this.container.addChild(this.graphic);
  }

  tick() {
    this.pos.y += 1;
    this.container.x = this.container.x;
    this.container.y = this.pos.y * GRID_SIZE;
  }
}
