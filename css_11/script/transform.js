// Перемещение

let isMoving = false;
let moveInterval = null;
let positionX = 0; // Текущая позиция по оси X
let positionY = 0;
let moveRight = true;
let moveDown = true;

document.getElementById('translate-btn').addEventListener('click', function() {
    const redBlock = document.querySelector('.translate__red');
    const blueBlock = document.querySelector('.translate__blue');
    
    if (!isMoving) {
        isMoving = true;
        
        // Функция для перемещения блоков
        function moveBlocks() {
          if (moveRight) {
            positionX += 1;
          } else {
            positionX -= 1;
          }

          if (positionX > 100) {
            moveRight = false;
          } else if (positionX < -100) {
            moveRight = true;
          }

          // Применяем трансформацию к блоку
          redBlock.style.transform = `translateX(${positionX}px)`;

          if (moveDown) {
            positionY += 1;
          } else {
            positionX -= 1;
          }

          if (positionX > 100) {
            moveDown = false;
          } else if (positionX < -100) {
            moveDown = true;
          }

          blueBlock.style.transform = `translateY(${positionX}px)`;
        }

        // Вызываем функцию moveBlock каждые 50 миллисекунд (или какое вам удобно время)
        moveInterval = setInterval(moveBlocks, 10);
    } else {
        clearInterval(moveInterval);
        isMoving = false;
    }
});


// Вращение

let isRotating = false;
let rotationInterval = null;
// Устанавливаем начальный угол вращения
let rotationAngle = 0;

document.getElementById('rotate-btn').addEventListener('click', function() {
  // Получаем красный блок
  const redBlock = document.querySelector('.rotate__red');
  const bluedBlock = document.querySelector('.rotate__blue');

  if (!isRotating) {
    isRotating = true;
    
    // Функция для вращения блока
    function rotateBlocks() {
        // Увеличиваем угол вращения на 1 градус
        rotationAngle += 1;
        
        // Применяем трансформацию к блоку
        redBlock.style.transform = `rotate(${rotationAngle}deg)`;
        bluedBlock.style.transform = `rotateX(${rotationAngle}deg) rotateY(${rotationAngle}deg) rotateZ(${rotationAngle}deg)`;
    }

    // Вызываем функцию rotateRedBlock каждые 50 миллисекунд (или какое вам удобно время)
    rotationInterval = setInterval(rotateBlocks, 50);
  } else {
    clearInterval(rotationInterval);
    isRotating = false;
  }
});



