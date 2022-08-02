class ElectricLamp {
  constructor(status) {
    this.status = status;
  }

  Light() {
    let txt = '';
    if (this.status == 1) {
      txt += "Đèn đang bật"
    } else {
      txt += "Đèn đang không bật."
    }
    return txt;
  }

}