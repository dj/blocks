/*
 * ActiveTetromino
 *
 * The currently falling block
 */
import * as PIXI from "pixi.js";
import { GRID_SIZE } from "./constants";

export default class ActiveTetromino {
  constructor() {
    this.color = 0xfe5f55;
    this.shape = "square";
    this.pieces = null;

    // set up initial position
    if (this.shape === "square") {
      this.pos = { x: 4 * GRID_SIZE, y: 0 };
    }
    this.container = new PIXI.Container();
    this.container.x = this.pos.x;
    this.container.y = this.pos.y;
    this.graphic = new PIXI.Graphics();

    // init tetromino pieces
    if (this.shape === "square") {
      // (0, 0) (0, 1)
      // (1, 0) (1, 1)
      this.pieces = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ];
    }

    // render block
    if (this.shape === "square") {
      for (const [x, y] of this.pieces) {
        this.graphic.beginFill(0xffffff);
        this.graphic.drawRect(
          x * GRID_SIZE,
          y * GRID_SIZE,
          GRID_SIZE,
          GRID_SIZE
        );
        this.graphic.endFill();
      }
      this.container.addChild(this.graphic);
    }
  }

  tick() {
    this.pos.y += 1;
    this.container.x = this.container.x;
    this.container.y = this.pos.y * GRID_SIZE;
  }
}
