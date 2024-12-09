import Zombie from '../class/Zombie';

test('Повышение уровня при нулевом здоровье', () => {
    expect(() => {
        const zombie = new Zombie('Виктор');
        zombie.damage(120);
        zombie.levelUp();
    }).toThrow();
});