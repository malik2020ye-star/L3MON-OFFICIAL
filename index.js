const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // محاولة قراءة الملف مباشرة وإرساله كاستجابة
    const filePath = path.join(__dirname, 'includes', 'login.html');
    
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        // إذا فشل في إيجاد الملف، سيعرض لك هذه اللوحة البسيطة لتعرف أن السيرفر حي
        res.send(`
            <body style="background:#1a1a1a; color:white; text-align:center; padding:50px; font-family:sans-serif;">
                <h2 style="color:#f1c40f;">السيرفر يعمل بنجاح!</h2>
                <p>لكن ملف login.html غير موجود في مسار includes</p>
                <form action="/login" method="POST" style="background:#333; padding:20px; display:inline-block; border-radius:10px;">
                    <input type="text" name="username" placeholder="User" required><br><br>
                    <input type="password" name="password" placeholder="Pass" required><br><br>
                    <button type="submit">Login</button>
                </form>
            </body>
        `);
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.send('<h1 style="color:green; text-align:center; margin-top:50px;">✔️ تم تسجيل الدخول!</h1>');
    } else {
        res.send('<h1 style="color:red; text-align:center; margin-top:50px;">❌ خطأ!</h1><a href="/">Back</a>');
    }
});

app.listen(port, () => console.log('Server is Live'));
