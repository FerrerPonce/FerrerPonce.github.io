function plano(){
THREE.Object3D.call(this);
 this.cuadro = new THREE.Mesh(new THREE.PlaneGeometry( 5, 20, 32 ),new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} ));

//definimos la posicion 
this.cuadro.position.x=1;
this.cuadro.position.y=1;

//añadimos el objeto
 this.add(this.cuadro);
 
 Perspectiva.prototype =new THREE.Object3D();
 function setup(){
	//Se declara un punto de luz
	var luzPuntual=new THREE.PointLight(0xCC00CC);
	luzPuntual.position.x=10;
	luzPuntual.position.y=10;
	luzPuntual.position.z=10;
	
 cuadro1= new Robotina();
 cuadro2=new Robotina();
 cuadro1.position.x=2;
 
	 step=0.01;
	  escena= new THREE.Scene();
 //escena.add(malla);
 escena.add(cuadro);
 
  camara= new THREE.PerspectiveCamera();
 camara.position.z=20;
  renderer= new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
 }
 
  
 function loop() {
  requestAnimationFrame(loop);
  renderer.render(escena,camara);
 }
  var escena, camara, renderer; //malla;
var step, cuadro1, cuadro2;
setup();
loop();