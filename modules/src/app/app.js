import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from '../game/game';

const game = new Game();
game.start();

// Пример использования дополнительных функций
const saveData = new GameSavingData();
loadGame();
saveGame();