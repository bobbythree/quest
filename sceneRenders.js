import { renderTestScene } from "./scenes/testSceneBuild";

export const scenes = {
  test: {
    render: renderTestScene,
    objects: {
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
  }
}
console.log(scenes.test.objects.rock);
