const express = require('express');
const app = express();
const path = require('path');

// تحديد المنفذ الذي يفضله سيرفر Render
const port = process.env.PORT || 10000;

// تعريف المسارات لتسهيل وصول السيرفر للملفات
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'includes')));

// الصفحة الرئيسية: تفتح صفحة login.html الموجودة داخل مجلد includes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'includes', 'login.html'));
});

// مسار إضافي للاحتياط
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'includes', 'login.html'));
});

// معالجة بيانات الدخول عند الضغط على زر Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // التحقق من البيانات (admin / 123456)
    if (username === 'admin' && password === '123456') {
        res.send(`
            <div style="background:#1a1a1a; color:#2ecc71; text-align:center; padding:50px; font-family:sans-serif; height:100vh;">
                <h1>✔️ تم تسجيل الدخول بنجاح</h1>
                <p style="color:white;">أهلاً بك في لوحة تحكم L3MON الخاصة بك</p>
            </div>
        `);
    } else {
        res.send(`
            <div style="background:#1a1a1a; color:#e74c3c; text-align:center; padding:50px; font-family:sans-serif; height:100vh;">
                <h1>❌ خطأ في اسم المستخدم أو كلمة المرور</h1>
                <a href="/" style="color:white; text-decoration:none; border:1px solid white; padding:10px 20px;">العودة للمحاولة</a>
            </div>
        `);
    }
});

// تشغيل السيرفر
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
