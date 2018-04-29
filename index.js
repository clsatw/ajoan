var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
const publicWeb = process.env.PUBLICWEB || './dist';

app.use(express.static(publicWeb));
console.log(`serving ${publicWeb}`);

app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: publicWeb });
});


app.listen(port, err => {
    if (err) {
        return console.log(err);
    }
    console.log(`listening on htt://localhost:${port}`);
});