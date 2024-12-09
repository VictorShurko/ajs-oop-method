import Character from '../class/Character';

test('Ошибка в имени', () => {
    expect(() => {
        new Character('В', 'Zombie');
    }).toThrow();
});