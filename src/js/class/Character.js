export default class Character {
    constructor(name, type, attack, defence){
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name должно быть строкой, min - 2 символа, max - 10');
        }

        if (typeof type !== 'string' || !types.includes(type)) {
            throw new Error(`Type должен один из типов (строка): ${types.join(', ')}`);
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить левел умершего');
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    };

    damage(points){
        if (this.health <= 0) {
            throw new Error('Персонаж погиб');
        }
        this.health -= points * (1 - this.defence / 100);
    };
}