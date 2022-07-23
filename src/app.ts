import User from './models/user.model'
import UserService from './services/users.services'

// User.query()
UserService.findOne(2)
// .insert({
//     username: 'someuser',
//     password: 'password'
// })
.then(e => console.log(e)).catch(err => console.log(err))
