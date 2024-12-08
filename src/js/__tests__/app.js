import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../app.js';

test('create character test', () => {
    const character = new Character('Виктор', 'Bowman', 100, 100);
    expect(character).toEqual({
        name: 'Виктор',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 100,
        defence: 100
    });
});

test('create bowman test', () => {
    const bowman = new Bowman('Виктор', 'Bowman');
    expect(bowman).toEqual({
        name: 'Виктор',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('create swordsman test', () => {
    const swordsman = new Swordsman('Виктор', 'Swordsman');
    expect(swordsman).toEqual({
        name: 'Виктор',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});

test('create magician test', () => {
    const magician = new Magician('Виктор', 'Magician');
    expect(magician).toEqual({
        name: 'Виктор',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
});

test('create daemon test', () => {
    const daemon = new Daemon('Виктор', 'Daemon');
    expect(daemon).toEqual({
        name: 'Виктор',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('create undead test', () => {
    const undead = new Undead('Виктор', 'Undead');
    expect(undead).toEqual({
        name: 'Виктор',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('create zombie test', () => {
    const zombie = new Zombie('Виктор', 'Zombie');
    expect(zombie).toEqual({
        name: 'Виктор',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});

test('Error create character name test', () => {
    expect(() => {
        new Character('В', 'Zombie');
    }).toThrow();
});

test('Error create character type test', () => {
    expect(() => {
        new Character('Виктор', 'character');
    }).toThrow();
});

test('Character level up test', () => {
    const zombie = new Zombie('Виктор', 'Zombie');
    zombie.levelUp();
    expect(zombie).toEqual({
        name: 'Виктор',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12
    });
});

test('Character damage test', () => {
    const zombie = new Zombie('Виктор', 'Zombie');
    zombie.damage(50);
    expect(zombie).toEqual({
        name: 'Виктор',
        type: 'Zombie',
        health: 55,
        level: 1,
        attack: 40,
        defence: 10
    });
});

test('Character damage with health <= 0 test', () => {
    const zombie = new Zombie('Виктор', 'Zombie');
    zombie.damage(50);
    expect(() => {
        const zombie = new Zombie('Виктор', 'Zombie');
        zombie.damage(120);
        zombie.damage(50);
    }).toThrow();
});

test('Character level up with health <= 0 test', () => {
    expect(() => {
        const zombie = new Zombie('Виктор', 'Zombie');
        zombie.damage(120);
        zombie.levelUp();
    }).toThrow();
});