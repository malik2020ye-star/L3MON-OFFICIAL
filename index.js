const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));

// كود ذكي للبحث عن ملف login.html في أي مكان متاح
app.get('/', (req, res) => {
    const locations = [
        path.join(__dirname, 'login.html'),
        path.join(__dirname, 'includes', 'login.html'),
        path.join(__dirname, 'src', 'includes', 'login.html')
    ];
    
    let found = false;
    for (let loc of locations) {
        if (!found) {
            res.sendFile(loc, (err) => {
                if (!err) found = true;
            });
        }
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.send('<h1 style="color:green;text-align:center;">✔️ Success!</h1>');
    } else {
        res.send('<h1 style="color:red;text-align:center;">❌ Error!</h1><a href="/">Back</a>');
    }
});

app.listen(port, () => console.log(`Server Live`));
