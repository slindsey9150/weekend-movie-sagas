const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `
    SELECT * FROM "movies"
      ORDER BY "title" ASC;
  `;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});
router.get('/:id', (req, res) => {
  console.log("req.params.id", req.params.id)
  let movieDetails = {}
  console.log("movie details - should be empty", movieDetails)
  let queryText =
    `SELECT * FROM "movies"
  WHERE "id" = $1;`;
  let queryParams = [req.params.id];
  pool.query(queryText, queryParams)
    .then(result => {
      movieDetails = { ...movieDetails, ...result.rows[0] }
      console.log("Movie Details after - should not be empty", movieDetails)
        queryText = `
    SELECT genres.name FROM "movies"
    JOIN "movies_genres" ON movies_genres.movie_id = movies.id
    JOIN "genres" ON movies_genres.genre_id = genres.id
    WHERE movies.id = $1;
    `
      pool.query(queryText, queryParams)
        .then(result => {
          movieDetails = { ...movieDetails, genres: result.rows }
          console.log("movie details", movieDetails)
          res.send(movieDetails)
        }).catch(error => {
          console.log("error", error)
        })
    })
    .catch(error => {
      console.log("error getting details", error)
      res.sendStatus(500)
    })
}) 

router.post (() => {
console.log('we\'re posting now boiz');

})




module.exports = router;
