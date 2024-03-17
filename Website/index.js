const express = require('express');
const app = express();
const path = require("path");
const port = 80;
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'public')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('index.pug', params);
})
app.get('/normal', (req, res) => {
    const params = {};
    res.status(200).render('mainframe.pug', params);
})
app.get('/contact-us', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
})
app.get('/services', (req, res) => {
    const params = {};
    res.status(200).render('services.pug', params);
})
app.get('/pricing', (req, res) => {
    const params = {};
    res.status(200).render('pricing.pug', params);
})
app.get('/about-us', (req, res) => {
    const params = {};
    res.status(200).render('about.pug', params);
})
app.get('/testimoneals', (req, res) => {
    const params = {};
    res.status(200).render('testimoneals.pug', params);
})
app.get('/our-team', (req, res) => {
    const params = {};
    res.status(200).render('team.pug', params);
})
app.get('/terms-and-condition', (req, res) => {
    const params = {};
    res.status(200).render('T&C.pug', params);
})
app.get('/refer-and-earn', (req, res) => {
    const params = {};
    res.status(200).render('R&E.pug', params);
})


// START THE SERVER
app.listen(process.env.PORT || port, () => {
    console.log(`The application started successfully on port ${port}`);
});
