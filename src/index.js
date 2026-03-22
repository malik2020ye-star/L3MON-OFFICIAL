const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/includes')));

// الصفحة الرئيسية تعرض صفحة اللوجن مباشرة
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/includes/login.html'));
});

// صفحة اللوجن (للاحتياط)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/includes/login.html'));
});

// معالجة بيانات الدخول
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.send('<h1 style="color:green; text-align:center; font-family:sans-serif; margin-top:50px;">تم تسجيل الدخول بنجاح! أهلاً بك في لوحة التحكم.</h1>');
    } else {
        res.send('<h1 style="color:red; text-align:center; font-family:sans-serif; margin-top:50px;">خطأ في البيانات!</h1><p style="text-align:center;"><a href="/">رجوع</a></p>');
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
