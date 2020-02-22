require('newrelic');
const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config()

app.use(express.static('public'));
app.use(express.json());

const port = process.env.PORT || 3044;

// PHOTOS
app.get('/api/photos/:id', (req, res) => {
  const restaurantId = req.params.id;
  axios.get(`${process.env.PHOTO_GALLERY}/${restaurantId}`)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.status(404).send('error fetching photos')
    })
});

// RESERVATIONS
app.get('/api/reservations/:id', (req, res) => {
  const restaurantId = req.params.id;
  axios.get(`${process.env.RESERVATIONS}/${restaurantId}`)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.status(404).send('error fetching reservations')
    })
});

// REVIEWS
app.get('/reviews/:id', (req, res) => {
  const restaurantId = req.params.id;
  axios.get(`${process.env.REVIEWS_ONE}/${restaurantId}`)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.status(404).send('error fetching reviews')
    })
});

app.get('/reviews/sort/:id/:sorting/:list', (req, res) => {
  const { id, sorting, list } = req.params;
  axios.get(`${process.env.REVIEWS_TWO}/${id}/${sorting}/${list}`)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.status(404).send('error fetching sorted reviews')
    })
});

// MENUS
app.get('/api/restaurant/:id', (req, res) => {
  const restaurantId = req.params.id;
  axios.get(`${process.env.MENUS_ONE}/${restaurantId}`)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.status(404).send('error fetching menus')
    })
});

app.get('/api/restaurantTitle/:id', (req, res) => {
  const restaurantId = req.params.id;
  axios.get(`${process.env.MENUS_TWO}/${restaurantId}`)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.status(404).send('error fetching menus')
    })
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});