const User = require('./Models/User');

User.list().then(res => console.log('User List:', res));

const user = new User;

user.$attributes.email = 'legendary@am.i';

console.log('User -> Is Developer:', user.isDev());
console.log('User:', user.toJSON());
console.log('DeletedAt Column:', user.deletedAtColumn);
