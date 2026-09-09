const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/products', (req, res) => {
  res.render('products');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/innovation', (req, res) => {
  res.render('innovation');
});

app.get('/careers', (req, res) => {
  res.render('careers');
});

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We will get back to you soon.' 
  });
});

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  
  console.log('Newsletter subscription:', email);
  
  res.json({ 
    success: true, 
    message: 'Successfully subscribed to our newsletter!' 
  });
});

app.post('/api/apply', (req, res) => {
  const { name, email, position, experience } = req.body;
  
  if (!name || !email || !position || !experience) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  console.log('Job application:', { name, email, position, experience });
  
  res.json({ 
    success: true, 
    message: 'Thank you for applying! We will review your application soon.' 
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render('404');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
