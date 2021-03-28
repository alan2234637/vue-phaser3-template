import Phaser from 'phaser'

export default class extends Phaser.Scene {
  init () {
    this.cameras.main.setBackgroundColor('#24252A')
    console.log(this.world)
  }

  preload () {
    console.log(this.world)
  }

  create () {
    this.helloWorld = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      'Hello World',
      { font: '40px Arial', fill: '#ffffff' }
    )
    this.helloWorld.setOrigin(0.5)
  }

  update (time, delta) {
    this.helloWorld.angle += 1
  }
}
