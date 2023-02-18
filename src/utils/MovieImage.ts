import attackClones from "../assets/movies/attack-clones.jpg";
import empireStrikes from "../assets/movies/empire-strikes.jpg";
import newHope from "../assets/movies/new-hope.jpg";
import phantomMenace from "../assets/movies/phantom-menace.jpg";
import returnJedi from "../assets/movies/return-jedi.jpg";
import revengeSith from "../assets/movies/revenge-sith.jpg";

export class MovieImage {
  attackClones: string;
  empireStrikes: string;
  newHope: string;
  phantomMenace: string;
  returnJedi: string;
  revengeSith: string;
  constructor() {
    this.attackClones = attackClones;
    this.empireStrikes = empireStrikes;
    this.newHope = newHope;
    this.phantomMenace = phantomMenace;
    this.returnJedi = returnJedi;
    this.revengeSith = revengeSith;
  }

  selectImage(name: string) {
    switch (name) {
      case "Attack of the Clones":
        return this.attackClones;
      case "The Empire Strikes Back":
        return this.empireStrikes;
      case "A New Hope":
        return this.newHope;
      case "The Phantom Menace":
        return this.phantomMenace;
      case "Return of the Jedi":
        return this.returnJedi;
      case "Revenge of the Sith":
        return this.revengeSith;
      default:
        return this.revengeSith;
    }
  }
}
