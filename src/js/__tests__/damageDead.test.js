import Zombie from '../class/Zombie';

test('Урон персонажу с нулевым здоровьем', () => {
    expect(() => {
        const zombie = new Zombie('Виктор');
        zombie.damage(120);
        zombie.damage(50);
    }).toThrow();
});