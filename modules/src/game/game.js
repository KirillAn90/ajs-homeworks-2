import Character from '../domain/domain';

export default class Game {
    start() {
        console.log('game started');
        const player = new Character('Player 1');
        console.log(`Started game for ${player.name}`);
    }
}

export class GameSavingData {
    constructor() {
        this.data = {};
    }
}

export function readGameSaving() {
    console.log('Reading game saving...');
}

export function writeGameSaving() {
    console.log('Writing game saving...');
}