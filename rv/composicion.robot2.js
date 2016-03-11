function Robotina(){
//se plantea las geometrias a utillixzar

var esferaForma= new THREE.SphereGeometry(0.5);
var esferaForma2= new THREE.SphereGeometry(1.25);
var cilindroForma= new THREE.CylinderGeometry(2,1,3.5);//torso
var cilindroForma2= new THREE.CylinderGeometry(1,2.5,2);//cadera
var cilindroForma3= new THREE.CylinderGeometry(0.5,0.5,4);//pierna izquierda y derecha
var cilindroForma4= new THREE.CylinderGeometry(0.3,0.3,2);//cuello
var material= new THREE.MeshNormalMaterial();
 //Para generar una forma combinada se requiere de las mallas poaras poder desplazar las formas en el espacio virtual
 
  var PieIzq = new THREE.Mesh(esferaForma);//pie izquierdo
  var PieDer = new THREE.Mesh(esferaForma);//pie derecho
  var ManIzq = new THREE.Mesh(esferaForma);//mano isq
  var ManDer = new THREE.Mesh(esferaForma);//mano derecha
  var HombIzq = new THREE.Mesh(esferaForma);//hombro isq
  var HombDer = new THREE.Mesh(esferaForma);//hombro derecha
  var Cabeza = new THREE.Mesh(esferaForma2);//cabeza
  var Torso = new THREE.Mesh(cilindroForma);//torso
  var Cadera = new THREE.Mesh(cilindroForma2);//cadera
  var PiernIzq = new THREE.Mesh(cilindroForma3);//pierna izq
  var PiernDer = new THREE.Mesh(cilindroForma3);//pierna derecha
  var BrazIzq = new THREE.Mesh(cilindroForma3);//brazo isq
  var BrazDer = new THREE.Mesh(cilindroForma3);//brazo derecho
  var Cuello = new THREE.Mesh(cilindroForma4);//cuello
 //se desplazan las mallas
 
 PieIzq.position.x=-1;
 PieIzq.position.y=-6;
 
 PieDer.position.x=1;
 PieDer.position.y=-6;
 
 ManIzq.position.x=-2.25;
 ManIzq.position.y=-0.6;
 
 ManDer.position.x=2.25;
 ManDer.position.y=-0.6;
 
 HombIzq.position.x=-2.25;
 HombIzq.position.y=3.1;
 
 HombDer.position.x=2.25;
 HombDer.position.y=3.1;
 
 Cabeza.position.x=0;
 Cabeza.position.y=5.5;
 
 Torso.position.x=0;
 Torso.position.y=1.75;
 
 Cadera.position.x=0;
 Cadera.position.y=-1;
 
 PiernIzq.position.x=-1;
 PiernIzq.position.y=-4;
 
 PiernDer.position.x=1;
 PiernDer.position.y=-4;
 
 BrazIzq.position.x=-2.25;
 BrazIzq.position.y=1.25;
 
 BrazDer.position.x=2.25;
 BrazDer.position.y=1.25;
 
 Cuello.position.x=0;
 Cuello.position.y=4.375;
 
 //se genera una forma geometria abstracta
  var forma = new THREE.Geometry();
 
 // se utiliza el paqyuete GeometryUtils para conjuntar las formas
 THREE.GeometryUtils.merge(forma, PieIzq);
 THREE.GeometryUtils.merge(forma, PieDer);
 THREE.GeometryUtils.merge(forma, ManIzq);
 THREE.GeometryUtils.merge(forma, ManDer);
 THREE.GeometryUtils.merge(forma, HombIzq);
 THREE.GeometryUtils.merge(forma, HombDer);
 THREE.GeometryUtils.merge(forma, Cabeza);
 THREE.GeometryUtils.merge(forma, Torso);
 THREE.GeometryUtils.merge(forma, Cadera);
 THREE.GeometryUtils.merge(forma, PiernIzq);
 THREE.GeometryUtils.merge(forma, PiernDer);
 THREE.GeometryUtils.merge(forma, BrazIzq);
 THREE.GeometryUtils.merge(forma, BrazDer);
 THREE.GeometryUtils.merge(forma, Cuello);
 
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
  
  malla.rotation.x +=0.01;
  malla.rotation.y +=0.01;
  
  renderer.render(escena,camara);
}

var escena, camara, renderer, malla;
setup();
loop();
