
  // --------------------------------
  //  Generate Password
  // --------------------------------
  getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  getRandomSymbol() {
    const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  randomFuncs = [
    this.getRandomLower,
    this.getRandomUpper,
    this.getRandomNumber,
    this.getRandomSymbol,
  ];

  generatePassword(passLength: number) {
    let generatePass = "";

    for (let i = 0; i < passLength; i++) {
      for (let func of this.randomFuncs) {
        generatePass += func();
      }
    }

    return generatePass.slice(0, passLength);
  }

  // Auto generated check filed clicked
  autoGeneratePassword(value: boolean) {
    if (value) {
      this.userForm.controls.autoPassword.setValue(this.generatePassword(20));
    }
  }

  // password copy to clipboard
  autoGenPassCopy() {
    navigator.clipboard.writeText(this.userForm.controls.autoPassword.value);
  }
