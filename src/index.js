const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/includes')));

// الصفحة الرئيسية تحولك للوجن
app.get('/', (req, res) => { res.sendhttps://github.com/malik2020ye-star/L3MON-OFFICIAL/edit/main/src/index.jsFile(path.join(__dirname, 'src/includes/login.html')); });
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/includes/login.html'));
});

// معالجة بيانات الدخول
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // اليوزر admin والباسورد 123456
    if (username === 'admin' && password === '123456') {
        res.send('<h1 style="color:green; text-align:center;">تم تسجيل الدخول بنجاح! أهلاً بك في لوحة التحكم الكاملة.</h1>');
    } else {
        res.send('<h1 style="color:red; text-align:center;">خطأ في البيانات! حاول مرة أخرى.</h1><a href="/login">رجوع</a>');
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
