class Character {
  private name?: string;
  strength: number;
  skill: number;

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.strength} points`);
  }
}


class Magician extends Character {
  magicPoints: number;

  constructor(name: string, strength: number, skill: number, magicPoints: number) {
    super(name, strength, skill);
    this.magicPoints = magicPoints;
  }
}


const p1 = new Character('Goku', 10, 98);
console.log(p1);
p1.attack();


const p2 = new Magician('MisterM', 9, 30, 98);
console.log(p2);
p2.attack();