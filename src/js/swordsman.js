import Character from './character';

export default class Swordsman extends Character {
  constructor(...properties) {
    super(...properties);
    this.type = 'Swordsman';
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
