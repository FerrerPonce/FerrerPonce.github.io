function Wall (size, x, y){
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size size),
          new THREEMeshNormalMaterial());
this.size=size;
this.position.x=x;
this.position.y=y;
}
Wall.prototype= new THREE.Mesh();

Environment.prototype.setMap=function (map){
var_offset=Math.floor (map.legth/2);

for (var i = 0; i<map.legth; i++)
for (var j = 0; j<map.legth; j++){
  if (map [i][j] === "x")
  this.add (new Wall(1, j-_offset, - (i-_offset)));
  else if (map [i][j]==="r")
  this.add(new Robot(0.5, j-_offset, - (i-_offset)));
  }
}

function setup(){
var mapa =new Array;
mapa [0] = "xxxxxxxxxxxxxxxxxxxxxxxxx";
mapa [1] = "xr               r      x";
mapa [2] = "x                       x";
mapa [3] = "x                       x";
mapa [4] = "x                       x";
mapa [5] = "x                       x";
mapa [6] = "x                       x";
mapa [7] = "x                       x";
mapa [8] = "x                       x";
mapa [9] = "x                       x";
mapa [10] = "x                       x";
mapa [11] = "x                       x";
mapa [12] = "x                       x";
mapa [13] = "x                       x";
mapa [14] = "x                       x";
mapa [15] = "x                       x";
mapa [16] = "x                       x";
mapa [17] = "x                       x";
mapa [18] = "x                       x";
mapa [19] = "x                       x";
mapa [20] = "x                       x";
mapa [21] = "x                       x";
mapa [22] = "x                       x";
mapa [23] = "x                       x";
mapa [24] = "xxxxxxxxxxxxxxxxxxxxxxxxx";

enviroment =new Enviromen();

entviroment.setMap (mapa);

camera= new THREE.PerspectiveCamera();
camera.position.z=30;

renderer =new THREE WebGLRenderer();
renderer.setSize(window.innerHeight*.95, 
                    window.innerHeight*.95);
document.body.appendChild(renderer.domElement);

entviroment.add (camera);
}

function loop(){
  requestAnimationFrame (loop);
  
  enviroment.sense();
  entviroment.plan();
  entviroment.act();
  
  entviroment.render(entviroment, camera );
  
  }
  
  var entviroment, camera, renderer;
  
  setup();
  loop();
  
