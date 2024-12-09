import Swordsman from '../class/Swordsman';

test('Правильно создается объект Swordsman', () => {
    const swordsman = new Swordsman('Виктор');
    const correct = {
        name: 'Виктор',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };

    expect(swordsman).toEqual(correct);
});