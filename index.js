const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));

// تحديد مسار المجلد الذي يحتوي على صفحة الدخول
const includesPath = path.join(__dirname, 'includes');
app.use(express.static(includesPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(includesPath, 'login.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.send('<h1 style="color:green;text-align:center;margin-top:50px;">✔️ أهلاً بك.. تم الدخول!</h1>');
    } else {
        res.send('<h1 style="color:red;text-align:center;margin-top:50px;">❌ خطأ!</h1><a href="/">رجوع</a>');
    }
});

app.listen(port, () => console.log(`Server started on ${port}`));
