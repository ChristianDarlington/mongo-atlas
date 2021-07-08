const mongoose = require('mongoose')
require('dotenv/config')

mongoose
  .connect(process.env.DB_CONNECTION , { useNewUrlParser: true })
  .then(() => console.log('We are connected to Mongo....'))
  .catch(err => console.log('you forgot your password', err))

const movieSchema = mongoose.Schema({
  title: String,
  genre: [String],
  date: {
    type: Date,
    default: Date.now()
  }
})

const Movie = mongoose.model('Movie', movieSchema)

function getAllMovies() {
  Movie.find()
    .then(allMovies => console.log('here are all movies', allMovies))
    .catch(err => console.log('could not get all movies', err))

}
getAllMovies()

