/* 仮（cookieのやりかた）:今のところ不可能 */
document.cookie = "key=value";
document.cookie = "hakkeyoi=のここった";
console.log(11111);

/* セッションの例 */
const session = window.sessionStorage;
session.setItem(['キー名'],['値']);
session.setItem(['キー名2'],['値2']);
console.log(session.getItem(['キー名']));
console.log(session.getItem(['キー名2']));
console.log(session);
console.log(console);

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
  };

console.log(person.greeting());
