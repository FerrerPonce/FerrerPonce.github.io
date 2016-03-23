function setup(){
	THREE.ImageUtils.crossOrigin='';
 var textura=THREE.ImageUtils.loadTexture("cabeza.jpg");
 var material=new THREE.MeshBasicMaterial({map:textura});
 //var forma=new THREE.BoxGeometry(1,1,1);
 var forma=new THREE.SphereGeometry(10);
 malla=new THREE.Mesh(forma,material);
 malla.rotation.z += 0.25;

escena= new THREE.Scene();
escena.add(malla);

var luzPuntual=new THREE.PointLight(0xffffff);
	luzPuntual.position.x=10;
	luzPuntual.position.y=10;
	luzPuntual.position.z=10;
	escena.add(luzPuntual);

camara=new THREE.PerspectiveCamera();
camara.position.z=15;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
  requestAnimationFrame(loop);
  malla.rotation.y += 0.01;
  renderer.render(escena,camara);
}

var camara,escena,renderer,malla;

setup();
loop();
