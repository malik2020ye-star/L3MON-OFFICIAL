const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));

// هذا السطر يضمن العثور على المجلد مهما كان مكان تشغيل السيرفر
const includesPath = path.join(__dirname, 'includes');
app.use(express.static(includesPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(includesPath, 'login.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.send('<h1 style="color:green;text-align:center;margin-top:50px;">✔️ تم تسجيل الدخول بنجاح!</h1>');
    } else {
        res.send('<h1 style="color:red;text-align:center;margin-top:50px;">❌ خطأ في البيانات!</h1><p style="text-align:center;"><a href="/">رجوع</a></p>');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
