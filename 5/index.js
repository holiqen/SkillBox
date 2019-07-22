start();

(function() {
  var randomNumber = getRandomInRange(1, 100);
  var limit = 10;

  window.start = function() {
    alert('Угадайте число!');
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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
  };
})();
