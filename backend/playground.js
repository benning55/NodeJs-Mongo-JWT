const mongoose = require('mongoose')
// const Role = require('./role.model')
const dbConfig = require("./config/db.config")
const { find } = require('./models/role.model')
// const db = require("./models")

mongoose
    .connect(`mongodb://localhost:${dbConfig.PORT}/${dbConfig.DB}`, {
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.")
        // initial();
    })
    .catch(err => {
        console.log('Connection error', err)
        process.exit()
    })

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
    })
)

async function main() {
    const users = new User(
        {
            username: "benning999",
            email: "test@gmail.com",
            password: "12345678"
        }
    )
    let findUser = await User.findOne({ username: "benning999" })
    console.log(findUser);
    // let data = await users.save()
    // console.log(data)
}

main()