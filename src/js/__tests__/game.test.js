import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('Character creation', () => {
  const palyer = new Character('newb1', 'Undead', 25, 25);
  expect(palyer).toEqual({
    name: 'newb1',
    type: 'Undead',
    attack: 25,
    defence: 25,
    level: 1,
    health: 100
  })
})

test('Bowman creation', () => {
  const palyer = new Bowman('newb2', 'Bowman', 25, 25);
  expect(palyer).toEqual({
    name: 'newb2', 
    type: 'Bowman',
    attack: 25,
    defence: 25,
    level: 1,
    health: 100
  })
})

test('Swordsman creation', () => {
  const palyer = new Swordsman('newb3', 'Swordsman', 40, 10);
  expect(palyer).toEqual({
    name: 'newb3', 
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    level: 1,
    health: 100
  })
})

test('Magician creation', () => {
  const palyer = new Magician('newb4', 'Magician', 10, 40);
  expect(palyer).toEqual({
    name: 'newb4', 
    type: 'Magician',
    attack: 10,
    defence: 40,
    level: 1,
    health: 100
  })
})

test('Undead creation', () => {
  const palyer = new Undead('newb5', 'Undead', 25, 25);
  expect(palyer).toEqual({
    name: 'newb5', 
    type: 'Undead',
    attack: 25,
    defence: 25,
    level: 1,
    health: 100
  })
})

test('Zombie creation', () => {
  const palyer = new Zombie('newb6', 'Zombie', 40, 10);
  expect(palyer).toEqual({
    name: 'newb6', 
    type: 'Zombie',
    attack: 40,
    defence: 10,
    level: 1,
    health: 100
  })
})

test('Daemon: creation', () => {
  const palyer = new Daemon('newb7', 'Daemon:', 10, 40);
  expect(palyer).toEqual({
    name: 'newb7', 
    type: 'Daemon',
    attack: 10,
    defence: 40,
    level: 1,
    health: 100
  })
})
