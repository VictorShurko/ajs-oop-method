import Zombie from '../class/Zombie';

test('Правильно создается объект Zombie', () => {
    const zombie = new Zombie('Виктор');
    const correct = {
        name: 'Виктор',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };

    expect(zombie).toEqual(correct);
});