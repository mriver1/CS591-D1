const fetch = require('node-fetch');
const getURL = require('Backend/utils').getURL;

module.exports = (app) => {

  app.post('/search-location-weather', (req, res) => {
    const requestBody = req.body;
    const apiURL = getURL(requestBody.locationType, requestBody.locationData);

    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
};