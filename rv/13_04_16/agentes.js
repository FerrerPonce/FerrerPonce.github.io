function Agent (x=0, y=0){
  TRHEE.Object.Call(this);
  this.position.x=x;
this.position.y=y;
}

Agent.prototype = new THREE.Object3D();
 Agent.enviroment.sense() = function (enviroment){};
  Agent.entviroment.plan()= function (enviroment){};
  Agent.entviroment.act()= function (enviroment){};
  
  function Enviroment(){
    THREE.Scene.call(this);
    }
    
    Entviroment.prototype =new THREE Scene();
    
    Entviroment.prototype = new THREE.Scene;
    
    Enviroment.prototype.sence=function(){
      for(var i=0; i< this.children.length; i++){
      if(this.children[i].sense !==undefined)
      this.children[1].sense(this);
      }
    
    Enviroment.prototype.plan=function(){
      for(var i=0; i< this.children.length; i++){
      if(this.children[i].plan !==undefined)
      this.children[1].plan(this);
      }
      
    Enviroment.prototype.act=function(){
      for(var i=0; i< this.children.length; i++){
      if(this.children[i].act !==undefined)
      this.children[1].act(this);
      }
