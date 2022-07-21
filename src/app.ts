import User from './models/user.model'

User.query()
// .insert({
//     username: 'someuser',
//     password: 'password'
// })
.then(e => console.log(e)).catch(err => console.log(err))