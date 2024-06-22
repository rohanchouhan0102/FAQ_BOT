const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; // Use the port provided by environment variable or default to 3001

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Setting up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load FAQs from JSON file
const faqs = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'faqs.json')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/chat', (req, res) => {
    res.render('chat', { faqs: faqs });
});

app.post('/get-answer', (req, res) => {
    const question = req.body.question;
    const faq = faqs.find(f => f.question === question);
    if (faq) {
        res.json({ answer: faq.answer });
    } else {
        res.json({ answer: 'Sorry, I do not understand that question. Please select one from the list.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
