const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));

// عرض صفحة الدخول فوراً عند فتح الرابط
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'includes', 'login.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.send('<h1>Success! Welcome to L3MON</h1>');
    } else {
        res.send('<h1>Error! Try again.</h1><a href="/">Back</a>');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
