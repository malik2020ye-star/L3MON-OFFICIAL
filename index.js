const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

// إعداد الدخول للوحة التحكم
app.use(express.static(path.join(__dirname, 'src/includes')));

app.get('/', (req, res) => {
    res.send('<h1>L3MON Server is Active!</h1><p>Go to <a href="/login">/login</a> to access your dashboard.</p>');
});

app.get('/login', (req, res) => {
    // محاولة فتح ملف الدخول من المجلد الداخلي
    res.sendFile(path.join(__dirname, 'src/includes/login.html'), (err) => {
        if (err) {
            res.status(500).send("Login page not found in /src/includes/. Please check file path.");
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running successfully on port ${port}`);
});

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
