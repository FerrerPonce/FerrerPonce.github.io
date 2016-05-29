function Sensor(position, direction) {
  THREE.Raycaster.call(this,position, direction);
  this.colision = false;
}

Sensor.prototype = new THREE.Raycaster();

function Robot (size, x,y){
  Agent.call(this,x,y);
  this.sensor = new Sensor();
  this.luz = new THREE.SpotLight(0xffffff,10,10,.20,.8,2)
  this.luz.position.x += -1;
  this.luz.position.y += -1;
  this.luz.target.position.set(0,0,0);
  this.actuator = new THREE.Mesh(new THREE.BoxGeometry(size,2*size,size),new THREE.MeshNormalMaterial());
  this.actuator.commands=[];
  this.add(this.actuator);
  this.add(this.luz);
  this.add(this.luz.target);
}

Robot.prototype = new Agent();

Robot.prototype.sense = function(environment){
  this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo= this.sensor.intersectObjects(environment.children,true);
  if((obstaculo.length>0 && (obstaculo[0].distance<=.5))){
    this.sensor.colision=true;
	environment.setMuro(this.position.x+1*Math.cos(this.rotation.z),
			this.position.y+1*Math.sin(this.rotation.z));
  }
  else
    this.sensor.colision=false;
}
Robot.prototype.plan=function (environment){
  this.actuator.commands=[];
  if (this.sensor.colision==true)
    this.actuator.commands.push('rotateCW');
  else
    this.actuator.commands.push('goStraight');
}
Robot.prototype.act=function(environment){
  var command=this.actuator.commands.pop();
  if( command==undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
}
  
  //las operaciones posibles con este robot son
  //goStraight()
  //rotateCW()
  //rotateCCW()
  
  Robot.prototype.operations={};
  
Robot.prototype.operations.goStraight= function(robot, distance){
	if(distance== undefined)
		distance= .05;
	robot.position .x+= distance*Math.cos(robot.rotation.z);
	robot.position .y+= distance*Math.sin(robot.rotation.z);
}

Robot.prototype.operations.rotateCW= function (robot,angle){
  if(angle==undefined)
   angle = -Math.PI/2;
  robot.rotation.z+=angle;
}

Robot.prototype.operations.rotateCCW=function(robot,angle){
  if(angle== undefined)
    angle = Math.PI/2;
  robot.rotation.z+=angle;
}