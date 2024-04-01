const express = require('express');
const app = express();
const path = require("path");
const port = 80;
const nodemailer = require('nodemailer');

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded());

// EJS SPECIFIC STUFF
app.set('view engine', 'ejs') // Set the template engine as Ejs
app.set('views', path.join(__dirname, 'public')) // Set the views directory

// Define email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'astacodeindiabusiness@gmail.com', // Change to your Gmail address
        pass: 'ryaygvspaznezgoo' // Change to your Gmail password
    }
});

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('index.ejs', params);
})
app.get('/normal', (req, res) => {
    const params = {};
    res.status(200).render('mainframe.ejs', params);
})

// Add a POST route for form submissions * it is for nodemailer*
app.post('/contact-us', (req, res) => {
    // Handle form submission here
    const { name, lastName, email, number, budget, textarea } = req.body;
    
    // Define email content
    const mailOptions = {
        from: email, // Using the user's email as the sender
        to: 'astacodeindiabusiness@gmail.com', // Change to your recipient email address
        subject: 'New Contact Form Submission from ' + name,
        html: `
            <p><strong>Name:</strong> ${name} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Number:</strong> ${number}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Message:</strong> ${textarea}</p>
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).render('thankyou.ejs');
        }
    });
});


// Add a POST route for form submissions * it is for thankyou page*
app.post('/contact-us', (req, res) => {
    // // Handle form submission here
    const { name, lastName, email, number, budget, textarea } = req.body;
    
    // Define params with the data you want to pass to the template
    const params = {
        name: name,
        lastName: lastName,
        email: email,
        number: number,
        budget: budget,
        textarea: textarea
    };
    // Example: send email, save to database, etc.
    res.status(200).render('thankyou.ejs', params);
});


app.get('/contact-us', (req, res) => {
    const params = {};
    res.status(200).render('contact.ejs', params);
})
app.get('/services', (req, res) => {
    const params = {};
    res.status(200).render('services.ejs', params);
})
app.get('/about-us', (req, res) => {
    const params = {};
    res.status(200).render('about.ejs', params);
})
app.get('/testimoneals', (req, res) => {
    const params = {};
    res.status(200).render('testimoneals.ejs', params);
})
app.get('/our-partners', (req, res) => {
    const params = {};
    res.status(200).render('partners .ejs', params);
})
app.get('/terms-and-condition', (req, res) => {
    const params = {};
    res.status(200).render('T&C.ejs', params);
})
app.get('/refer-and-earn', (req, res) => {
    const params = {};
    res.status(200).render('R&E.ejs', params);
})

app.use((req, res) => {
    const params = {};
    res.status(404).render('404.ejs', params);
})
// START THE SERVER
app.listen(process.env.PORT || port, () => {
    console.log(`The application started successfully on port ${port}`);
});

