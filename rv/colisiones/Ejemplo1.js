function setup(){
cubo1= new THREE.Mesh (new THREE.BoxGeometry(1,1,1),
                      new THREE.MeshNormalMaterial());
  cubo2=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),
                      new THREE.MeshNormalMaterial());
    cubo1.position.x=0.7;
    cubo2.position.x=-0.7;
    
    camara= new THREE.Perspective.Camera();
    camara.position.z=5;
    
    raycaster =nwe THREE.Raycaster();
    raycaster.setFormCamera (new THREE.Vector2 (0,0), camara);
