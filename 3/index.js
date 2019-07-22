


function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = getRandomInRange(1, 1000);

function showMessage() {
  alert('Угадайте число!');
}

showMessage();

var limit = 10;

while (true) {
  var userNumber = +prompt('Напишите число', '');
  var limit = limit - 1;
  if (Number.isNaN(userNumber + 1) === true) {
    alert('Введи число!');
  }

  else if (!userNumber || limit === 0) {
    alert('Игра окончена!');
    break;
  }

  else if (userNumber > randomNumber) {
    alert('Меньше! Осталось попыток: ' + limit);
  }

  else if (userNumber < randomNumber) {
    alert('Больше! Осталось попыток: ' + limit);
  }

  else {
    alert('Правильно!');
  }
}
