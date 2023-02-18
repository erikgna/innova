import luke from "../assets/characters/luke.jpg";
import vader from "../assets/characters/vader.png";
import kenobi from "../assets/characters/kenobi.png";
import beru from "../assets/characters/beru.jpg";
import c3po from "../assets/characters/c3po.png";
import leia from "../assets/characters/leia.jpg";
import r5d4 from "../assets/characters/r5d4.png";
import r2d2 from "../assets/characters/r2d2.png";
import owen from "../assets/characters/owen.png";
import biggs from "../assets/characters/biggs.png";

export class CharacterImage {
  luke: string;
  vader: string;
  c3po: string;
  r2d2: string;
  r5d4: string;
  kenobi: string;
  leia: string;
  owen: string;
  beru: string;
  biggs: string;
  constructor() {
    this.luke = luke;
    this.vader = vader;
    this.c3po = c3po;
    this.r2d2 = r2d2;
    this.r5d4 = r5d4;
    this.kenobi = kenobi;
    this.leia = leia;
    this.owen = owen;
    this.biggs = biggs;
    this.beru = beru;
  }

  selectImage(name: string) {
    switch (name) {
      case "Luke Skywalker":
        return this.luke;
      case "Darth Vader":
        return this.vader;
      case "C-3PO":
        return this.c3po;
      case "R2-D2":
        return this.r2d2;
      case "Leia Organa":
        return this.leia;
      case "Owen Lars":
        return this.owen;
      case "Beru Whitesun Iars":
        return this.beru;
      case "R5-D4":
        return this.r5d4;
      case "Biggs Darklighter":
        return this.biggs;
      case "Obi-Wan Kenobi":
        return this.kenobi;
      default:
        return this.kenobi;
    }
  }
}
