var sum = 0;

while (true) {

  var value = prompt("Введите число", '');

  if (Number.isNaN(+value + 1) === true) {
    alert('Неверное значение');
  }

  else {
    sum += +value;
  }

  if (value === null) break;

}
alert( 'Сумма: ' + sum );
