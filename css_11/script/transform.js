let isRotating = false;
let rotationInterval = null;
// Устанавливаем начальный угол вращения
let rotationAngle = 0;

document.getElementById('rotate-play').addEventListener('click', function() {
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



