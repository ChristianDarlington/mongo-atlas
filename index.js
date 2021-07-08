const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://ChristianDarlington:kidmoney@cluster0.uccvw.mongodb.net/test',{useNewUrlParser: true})
.then(() => console.log('We are connected to Mongo....'))
.catch(err => console.log('you forgot your password',err))

