export const gameObjects = {
  player: {
    x: 100,
    y: 380,
    w: 20,
    h: 20,
    vx: 2,
    vy: 2,
    leftPressed: false,
    rightPressed: false,
    upPressed: false,
    downPressed: false,
    inventory: []
  },
  rock: {
    x: 300,
    y: 395,
    r: 5,
    description: 'Looks like a regular rock to me.',
    canGet: true,
    canUse: true
  },
  tree: {
    startX: 500,
    startY: 400,
    nextX: 490,
    nextY: 350,
    lastX: 480,
    lastY: 400,
    description: 'It\'s an evergreen tree',
    canGet: false
  },
  sky: {
    description: 'well, it\'s what\'s up.',
    canGet: false
  },
  grass: {
    description: 'It\'s green',
    canGet: false
  }
}

