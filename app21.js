const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync('E:/NU/LP/TZI/krr21/secure/server-key.pem'),
  cert: fs.readFileSync('E:/NU/LP/TZI/krr21/secure/server-certificate.pem'),
  ca: fs.readFileSync('E:/NU/LP/TZI/krr21/secure/ca-certificate.pem'), // Ланцюжок сертифікатів для взаємної аутентифікації
 //requestCert: true,                                // Вимагає від клієнта пред'явлення сертифіката
  rejectUnauthorized: true                          // Автоматичне відхилення невірних сертифікатів
};

app.get('/', (req, res) => {
  res.send('Взаємна автентифікацію ( захищений сеанс зв`язку) відбулася');
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
