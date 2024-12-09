import Zombie from '../class/Zombie';

test('Повышение уровня', () => {
    const zombie = new Zombie('Виктор');
    const correct = {
        name: 'Виктор',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12
    };

    zombie.levelUp();
    expect(zombie).toEqual(correct);
});