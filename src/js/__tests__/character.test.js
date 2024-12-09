import Character from '../class/Character';

test('Правильно создается объект Character', () => {
    const character = new Character('Виктор', 'Bowman', 100, 100);
    const correct = {
        name: 'Виктор',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 100,
        defence: 100
    };

    expect(character).toEqual(correct);
});