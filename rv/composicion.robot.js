function setup(){
//se plantea las geometrias a utillixzar

var esferaForma= new THREE.SphereGeometry(1);
var cilindroForma= new THREE.CylinderGeometry(2.5,1,3.5);
var cilindroForma2= new THREE.CylinderGeometry(1,2.5,2);
var material= new THREE.MeshNormalMaterial();
 //Para generar una forma combinada se requiere de las mallas poaras poder desplazar las formas en el espacio virtual
 
  var esfera1 = new THREE.Mesh(esferaForma);
  var esfera2 = new THREE.Mesh(esferaForma);
  var cilindro1 = new THREE.Mesh(cilindroForma);
  var cilindro2 = new THREE.Mesh(cilindroForma2);
 //se desplazan las mallas
 
 esfera1.position.x=5;

 esfera2.position.x=-3;
 cilindro1.position.x=0;
 cilindro1.position.y=1.75;
 
 cilindro2.position.x=0;
 cilindro2.position.y=-1;
 
 //se genera una forma geometria abstracta
 
 var forma = new THREE.Geometry();
 // se utiliza el paqyuete GeometryUtils para conjuntar las formas
 
 THREE.GeometryUtils.merge(forma, esfera1);
 THREE.GeometryUtils.merge(forma, esfera2);
 THREE.GeometryUtils.merge(forma, cilindro1);
 THREE.GeometryUtils.merge(forma, cilindro2);
 
 //se genera la malla a partir de la forma 
 
 malla= new THREE.Mesh(forma, material);
 
 //Se inicializa la escena y se agrega la malla a esta 
 
 escena= new THREE.Scene();
 escena.add(malla);
 //se inicializa la camara y el renderet
 
 camara= new THREE.PerspectiveCamera();
 camara.position.z=20;
 
 renderer= new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
 }
 
 function loop() {
  requestAnimationFrame(loop);
  //Es importante notar que las rotaciones son sobre los ejes que  estan fijos a la malla, no los ejees del lienzo, inicialmente ambos coincide
  
  //malla.rotation.x +=0.01;
  //malla.rotation.y +=0.01;
  
  renderer.render(escena,camara);
}

var escena, camara, renderer, malla;
setup();
loop();
