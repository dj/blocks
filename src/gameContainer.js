/*
 * gameContainer
 *
 * container for the main game area
 */

export default class GameContainer {
  // width and height of blocks
  blockSize = 30;
  gameContainerW = this.blockSize * 10;
  gameContainerH = this.blockSize * 18;
  block = {
    pos: { x: 0, y: 0 },
    color: 0xfe5f55,
    shape: "square",
    graphic: null,
  };
  pile = [];
  gameContainer = null;

  constructor(PIXI, app) {
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

    // render block
    const blockGraphic = new PIXI.Graphics();
    blockGraphic.beginFill(0xfe5f55);
    blockGraphic.drawRect(0, 0, this.blockSize, this.blockSize);
    blockGraphic.endFill();
    this.block.graphic = this.gameContainer.addChild(blockGraphic);

    app.stage.addChild(this.gameContainer);
  }

  tick() {
    this.block.pos.y += 1;
    this.block.graphic.x = this.block.graphic.x;
    this.block.graphic.y = this.block.pos.y * this.blockSize;
  }
}
