const mongoose = require('mongoose')
const Role = require('./role.model')

const User = mongoose.model (
    'User',
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Role'
            }
        ]
    })
)

module.exports = User