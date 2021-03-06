
var earth = function(p) {
    var time = 0;
    let tex;
  
    p.setup = function() {
      
    var sketchCanvas = p.createCanvas(256,256,p.WEBGL);
  
    sketchCanvas.parent('#sketch_presentation');
    p.angleMode(p.DEGREES);
      
  
  
    };
  
    p.find3dCord = function(los,las) {
        let lo = p.map(los,0,360,-90,90);
        let la = p.map(las,0,360,-180,180);
        let px= p.sin(lo) * p.cos(la);
        let py= p.sin(lo) * p.sin(la);
        let pz= p.cos(lo);
        return [px,py,pz]
    }

    function resizeCanvas(div) {
      var canvasDiv = document.getElementById('sketch_presentation');
      var width = canvasDiv.offsetWidth;
      var height = canvasDiv.offsetWidth;
      p.resizeCanvas(width,height);
    }
    
    p.draw = function() {
      resizeCanvas('sketch_presentation');
      time += 1;
      
      p.background(0,0,0,0);
      p.noFill();
      p.stroke(255);
      p.strokeWeight(4);
      

      for (let i = 0 ; i<4 ; i+= 1) {
      p.push();
     
      p.rotateX(time+i*20);
      p.rotateY(time);
      p.scale(i/1.5);
      p.fill(0,0,0,0);
      p.box(p.width/6 + p.sin(time)*p.width/16);
      p.pop();
      }

      


    };
  };