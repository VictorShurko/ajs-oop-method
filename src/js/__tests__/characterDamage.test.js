import Zombie from '../class/Zombie';

test('Урон персонажу', () => {
    const zombie = new Zombie('Виктор');
    const correct = {
        name: 'Виктор',
        type: 'Zombie',
        health: 55,
        level: 1,
        attack: 40,
        defence: 10
    };

    zombie.damage(50);
    expect(zombie).toEqual(correct);
});