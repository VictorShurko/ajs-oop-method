import Magician from '../class/Magician';

test('Правильно создается объект Magician', () => {
    const magician = new Magician('Виктор');
    const correct = {
        name: 'Виктор',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };

    expect(magician).toEqual(correct);
});