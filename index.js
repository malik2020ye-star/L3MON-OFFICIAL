const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));

// هذه الصفحة ستظهر فوراً بمجرد فتح الرابط
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>L3MON LOGIN</title>
            <style>
                body { background: #0f0f0f; color: #00ff00; font-family: sans-serif; text-align: center; padding-top: 100px; }
                form { background: #1a1a1a; display: inline-block; padding: 30px; border: 1px solid #00ff00; border-radius: 10px; }
                input { display: block; margin: 10px auto; padding: 10px; width: 200px; background: #000; color: #0f0; border: 1px solid #0f0; }
                button { background: #00ff00; color: #000; padding: 10px 20px; border: none; cursor: pointer; font-weight: bold; }
            </style>
        </head>
        <body>
            <h1>L3MON CONTROL PANEL</h1>
            <form action="/login" method="POST">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">LOGIN</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.send('<h1 style="color:green; text-align:center;">WELCOME MASTER! LOGIN SUCCESS</h1>');
    } else {
        res.send('<h1 style="color:red; text-align:center;">WRONG DATA!</h1><a href="/" style="color:white;">BACK</a>');
    }
});

app.listen(port, () => console.log('Server is Live'));
