const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.render('index', { imageUrl: null });
});

// Generate image route
app.get('/generate-image', (req, res) => {
    const text = req.query.text || 'default';
    const imageUrl = `https://robohash.org/${text}.png`;
    res.render('index', { imageUrl });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
