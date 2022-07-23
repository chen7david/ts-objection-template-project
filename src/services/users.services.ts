import User from '../models/user.model'
import base from './base.service'

export default {
    ...base(User)
}