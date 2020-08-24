import Character from './character';

export default class Bowman extends Character {
  constructor(...rest) {
    super(...rest);
    this.type = 'Bowman';
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
