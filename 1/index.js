var myName = prompt('Как вас зовут?');
var lastName = prompt ('Какая у вас фамилия?');
var myBirthYear = prompt('Введите ваш год рождения');

var now = new Date();
var age = now - myBirthYear;


if (age < 20) {
  alert('Привет, ' + myName + ' ' + lastName + '!');
}
else if (age >= 20 && age < 40) {
  alert('Добрый день, ' + myName + ' ' + lastName);
}
else {
  alert('Здравствуйте, ' + myName + ' ' + lastName);
}
