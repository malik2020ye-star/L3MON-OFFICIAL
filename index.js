const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <body style="background:#000; color:#0f0; text-align:center; padding-top:100px; font-family:monospace;">
            <h1>L3MON SYSTEM ACTIVE</h1>
            <form action="/login" method="POST" style="border:1px solid #0f0; display:inline-block; padding:20px;">
                <input type="text" name="username" placeholder="User" style="display:block; margin:10px auto;">
                <input type="password" name="password" placeholder="Pass" style="display:block; margin:10px auto;">
                <button type="submit" style="background:#0f0; color:#000; cursor:pointer;">CONNECT</button>
            </form>
        </body>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.send('<h1 style="color:green; text-align:center;">LOGIN SUCCESSFUL</h1>');
    } else {
        res.send('<h1 style="color:red; text-align:center;">ACCESS DENIED</h1><a href="/" style="color:white;">RETRY</a>');
    }
});

app.listen(port, () => console.log('SYSTEM IS LIVE'));
