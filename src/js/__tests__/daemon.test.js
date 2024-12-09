import Daemon from '../class/Daemon';

test('Правильно создается объект Daemon', () => {
    const daemon = new Daemon('Виктор');
    const correct = {
        name: 'Виктор',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };

    expect(daemon).toEqual(correct);
});