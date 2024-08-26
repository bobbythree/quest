import { scenes } from "../sceneRenders";

export const testSceneObjects = {  
  rock: {
    x: 300,
    y: 395,
    r: 5    
  },
  tree: {
    startX: 500,
    startY: 400,
    nextX: 490,
    nextY: 350,
    lastX: 480,
    lastY: 400,    
  },
  sky: {
    
  },
  grass: {

  }
} 

const ctx = canvas.getContext('2d');

class TestScene {
  constructor() {
    
  } 
  drawTree() {
    const tree = scenes.test.objects.tree;
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(tree.startX, tree.startY);
    ctx.lineTo(tree.nextX, tree.nextY);
    ctx.lineTo(tree.lastX, tree.lastY);
    ctx.closePath();
    ctx.fill();
  }
  drawRock() {
    const rock = scenes.test.objects.rock;
    ctx.fillStyle = '#50575a';
    ctx.beginPath();
    ctx.arc(rock.x, rock.y, rock.r, 0, Math.PI * 2)
    ctx.fill();
  }
}


export function renderTestScene() {
  const testScene = new TestScene();  
  testScene.drawTree();
  testScene.drawRock();
}
