const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

// محرك التشغيل الأصلي لـ L3MON
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    // هذا سيفتح لك واجهة الدخول الأصلية
    res.sendFile(path.join(__dirname, 'src/includes/login.html'));
});

app.listen(port, () => {
    console.log(`L3MON Server is running on port ${port}`);
});
