const path = require('path');
require('dotenv').config();
const express = require('express');
const app = express();  // <-- Definiera app här
const admin = require('firebase-admin');

const serviceAccount = require('.');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://YOUR-PROJECT-ID.firebaseio.com"  // Ändra detta till din faktiska databas-URL
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));  // <-- Flytta denna här

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
