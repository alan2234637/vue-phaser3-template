import Phaser from 'phaser'

import GameScene from './scenes/GameScene'

import config from './config'

function launch (containerId) {
  const docElement = document.documentElement
  const width = docElement.clientWidth > config.gameWidth
    ? config.gameWidth
    : docElement.clientWidth
  const height = docElement.clientHeight > config.gameHeight
    ? config.gameHeight
    : docElement.clientHeight

  return new Phaser.Game({
    type: Phaser.AUTO,
    width: width,
    height: height,
    parent: containerId,
    scene: [GameScene]
  })
}

export default launch
export { launch }
