class SwitchButton {
  constructor(status, lamp) {
    this.status = status;
    this.lamp = lamp;
  }

 getLampLight() {
  return this.lamp.Light() ;
 }

}