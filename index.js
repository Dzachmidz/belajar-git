class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  action(){
    console.log("Say " + this.sound)
  }  
}
