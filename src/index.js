const express = require('express');
const app = express();
const path = require('path');

// منفذ Render الرسمي
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));

// هذا السطر هو السحر: سيجعل السيرفر يرى مجلد includes أينما كان
app.use(express.static(path.join(__dirname, 'includes')));

// عرض صفحة الدخول
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'includes', 'login.html'));
});

// معالجة تسجيل الدخول
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.send('<h1 style="color:green;text-align:center;">✔️ تم الدخول بنجاح!</h1>');
    } else {
        res.send('<h1 style="color:red;text-align:center;">❌ خطأ!</h1><a href="/">رجوع</a>');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
