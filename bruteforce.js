let password = "fSxa";

let lib = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class letter {
  constructor(v) {
    this.v = v;
  };

  increment() {
    if (this.v < lib.length - 1) {
      this.v++;
      return 1;
    } else {
      this.v = 0;
      return 0;
    }
  };

  get value() {
    return lib[this.v];
  }
};

class word {
  constructor() {
    this.letters = new Array(new letter(0));
  };

  increment() {
    try {
      for (let i = 0; this.letters[i].increment() === 0; i++) { };
    } catch (err) {
      this.letters.push(new letter(0));
    };
  };

  get value() {
    let out = '';
    for (let i of this.letters) {
      out += i.value;
    }

    return out;
  };
};

x = new word();
let i = 0;

while (x.value !== password) {
  // console.log(i, x.value);
  x.increment();
  i++;
};

console.log(i, x.value);