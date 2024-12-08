export class Character {
    constructor(name, type, attack, defence){
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name должно быть строкой, min - 2 символа, max - 10');
        }

        if (typeof type !== 'string' || ![
            'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'
        ].includes(type)) {
            throw new Error('Type должен один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
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

export class Bowman extends Character {
    constructor(name, type){
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name, type){
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name, type){
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Character {
    constructor(name, type){
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Undead extends Character {
    constructor(name, type){
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name, type){
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}