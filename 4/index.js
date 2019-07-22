function declOfNum(number, titles)
{
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

var timer = setInterval(function() {
  Data = new Date();
  Year = Data.getFullYear()
  Month = Data.getMonth();
  Day = Data.getDate();
  Hour = Data.getHours();
  Minutes = Data.getMinutes();
  Seconds = Data.getSeconds();
  Week = Data.getDay();
  var month = new Array(12);
    month[0] = "января";
    month[1] = "февраля";
    month[2] = "марта";
    month[3] = "апреля";
    month[4] = "майя";
    month[5] = "июня";
    month[6] = "июля";
    month[7] = "августа";
    month[8] = "сентября";
    month[9] = "октября";
    month[10] = "ноября";
    month[11] = "декабря";
    var week = new Array(7);
      week[0] = "воскресенье";
      week[1] = "понедельник";
      week[2] = "вторник";
      week[3] = "среда";
      week[4] = "четверг";
      week[5] = "пятница";
      week[6] = "суббота";
  console.log('Сегодня ' + Day + " " + month[Data.getMonth()] + " " + Year + " года, " + week[Data.getDay()] + ", " + Hour + " " + declOfNum(Data.getHours(), ['час', 'часа', 'часов']) + " " + Minutes + " " + declOfNum(Data.getMinutes(), ['минута', 'минуты', 'минут']) + " " + Seconds + " " + declOfNum(Data.getSeconds(), ['секунда', 'секунды', 'секунд']));
}, 1000);
