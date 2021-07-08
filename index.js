const mongoose = require('mongoose')
require('dotenv/config')

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log('We are connected to Mongo....'))
  .catch(err => console.log('you forgot your password', err))

const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  genre: [String],
  year: Number,
  date: {
    type: Date,
    default: Date.now(),
  },
})

const Movie = mongoose.model('Movie', movieSchema)

function getAllMovies() {
  Movie.find()
    .then(allMovies => console.log('here are all movies', allMovies))
    .catch(err => console.log('could not get all movies', err))
}
getAllMovies()

function createmovie() {
  const newMovie = new Movie({
    title: 'Toy Story 3',
    genre: ['Cartoons', 'Family'],
    year: 2014,
    rating: 5,
  })
  newMovie
    .save()
    .then(() => console.log('movie was added'))
    .catch(err => console.log('movie was not added', err))
}

createmovie()

function getAllMoviesCount() {
  Movie.find()
    .findcountDocuments()
    .then(count => console.log('here is my count', count))
    .catch(err => console.log(err))
}
getAllMovies()

function getMoviesFiltered() {
  Movie.find()
    .limit(10)
    .sort({ year: 0 }
      .then(movies => console.log('here are filtered', movies))
      .catch(err => console.log(err)))
}

getMoviesFiltered()
