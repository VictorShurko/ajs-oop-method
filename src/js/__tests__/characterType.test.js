import Character from '../class/Character';

test('Ошибка при заполнении type', () => {
    expect(() => {
        new Character('Виктор', 'character');
    }).toThrow();
});