let inputDir = { x: 0, y: 0 };

const foodSound = new Audio("music/food.mp3");
const gameOverSound = new Audio("music/gameover.mp3");
const moveSound = new Audio("music/move.mp3");
const musicSound = new Audio("music/music.mp3");
let speed = 19;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
  {
    x: 13,
    y: 15,
  },
];
food = { x: 6, y: 7 };

//Game functions

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }

  lastPaintTime = ctime;
  gameEngine();
}

function isCollide(snake) {
  //if snake bumps into itself
  for (let index = 1; index < snakeArr.length; index++) {
    if (snake[index].x === snake[0].x && snake[index].y === snake[0].y) {
      return true;
    }
  }

  //if snake collides with the boundary of the board
  if (
    snake[0].x >= 18 ||
    (snake[0].x <= 0 && snake[0].y >= 18) ||
    snake[0].y <= 0
  ) {
    return true;
  }
  return false;
}