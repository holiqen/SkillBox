function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date();
}

function UserList() {
  this.users = [];

  this.add = function(user) {
    this.users.push(user);
    return this.users;
  };

  this.getAllUsers = function() {
    var str = '';
    for (var i = 0; i < this.users.length; i++) {
      str += this.users[i].firstName + ' ' + this.users[i].lastName + ' ' + this.users[i].regDate + '\n';
    }
    return str;
  };
}

function regUser() {
  var list = new UserList();
  function userlistContains(user) {
    return (list.users.filter(function (currentObject) {
      if ((currentObject.firstName === user.firstName) &&  (currentObject.lastName === user.lastName)) {
        return currentObject;
      }
      return false;
    }).length > 0) ? true : false;
  }
  function getUserData() {
    var userData = prompt('Веедите имя и фамилию одной строкой через пробел');
    if (userData === null) {
      return alert(list.getAllUsers());
    }
    var userDataArr = userData.split(' ').filter( function(word) {
      if (word.length > 0) {
        return word;
      }
    });
    if (userDataArr.length !== 2) {
      alert('Имя и Фамилия должны состоять из двух слов одной строкой через пробел');
      return getUserData();
    }
    var newUser = new User(userDataArr[0], userDataArr[1]);
    if (userlistContains(newUser)) {
      alert('Такие имя и фамилия уже есть');
      return getUserData();
    }
    list.add(newUser);
    return getUserData();
  }
  return getUserData();
}

regUser();
