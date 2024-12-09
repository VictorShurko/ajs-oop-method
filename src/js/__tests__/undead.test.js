import Undead from '../class/Undead';

test('Правильно создается объект Undead', () => {
    const undead = new Undead('Виктор');
    const correct = {
        name: 'Виктор',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };

    expect(undead).toEqual(correct);
});