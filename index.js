const express = require('express');
const app = express();
const path = require("path");
const port = 80;
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'ejs') // Set the template engine as pug
app.set('views', path.join(__dirname, 'public')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('index.ejs', params);
})
app.get('/normal', (req, res) => {
    const params = {};
    res.status(200).render('mainframe.ejs', params);
})
app.get('/contact-us', (req, res) => {
    const params = {};
    res.status(200).render('contact.ejs', params);
})
app.get('/services', (req, res) => {
    const params = {};
    res.status(200).render('services.ejs', params);
})
app.get('/pricing', (req, res) => {
    const params = {};
    res.status(200).render('pricing.ejs', params);
})
app.get('/about-us', (req, res) => {
    const params = {};
    res.status(200).render('about.ejs', params);
})
app.get('/testimoneals', (req, res) => {
    const params = {};
    res.status(200).render('testimoneals.ejs', params);
})
app.get('/our-team', (req, res) => {
    const params = {};
    res.status(200).render('team.ejs', params);
})
app.get('/terms-and-condition', (req, res) => {
    const params = {};
    res.status(200).render('T&C.ejs', params);
})
app.get('/refer-and-earn', (req, res) => {
    const params = {};
    res.status(200).render('R&E.ejs', params);
})


// START THE SERVER
app.listen(process.env.PORT || port, () => {
    console.log(`The application started successfully on port ${port}`);
});
