function Agent (x=0, y=0){
  TRHEE.Object3D.Call(this);
  this.position.x=x;
this.position.y=y;
}

Agent.prototype = new THREE.Object3D();
 Agent.prototype.sense() = function (environment) {};
  Agent.prototype.plan()= function (environment) {};
  Agent.prototype.act()= function (environment) {};
  
  function Enviroment(){
    THREE.Scene.call(this);
    }
    
    Environment.prototype =new THREE.Scene();
    
    Environment.prototype = new THREE.Scene;
    
    Environment.prototype.sence=function(){
      for(var i=0; i< this.children.length; i++){
      if(this.children[i].sense !==undefined)
      this.children[1].sense(this);
      }
    }
    
  
    
    Environment.prototype.plan=function(){
      for(var i=0; i< this.children.length; i++){
      if(this.children[i].plan !==undefined)
      this.children[1].plan(this);
      }
    }
      
    Enviroment.prototype.act=function(){
      for(var i=0; i< this.children.length; i++){
      if(this.children[i].act !==undefined)
      this.children[1].act(this);
      }
    }
