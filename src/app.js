const express = require('express');
const db = require('./utils/database');
const cors = require('cors');

const { port } = require('./config');

const app = express();

app.use(cors('*'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
//

db.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch(err => {
        console.error('Unable to sync the database:', err);
    });



app.use('/api/pays', require('./mvc/pay.routes'));

app.use((req, res, next) => {
    res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});