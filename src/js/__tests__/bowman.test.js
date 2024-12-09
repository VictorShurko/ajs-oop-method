import Bowman from '../class/Bowman';

test('Правильно создается объект Bowman', () => {
    const bowman = new Bowman('Виктор');
    const correct = {
        name: 'Виктор',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };

    expect(bowman).toEqual(correct);
});