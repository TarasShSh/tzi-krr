const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  ca: fs.readFileSync('E:/NU/LP/TZI/krr21/secure/ca-certificate.pem'),  // Ланцюжок сертифікатів для взаємної аутентифікації
  key: fs.readFileSync('E:/NU/LP/TZI/krr21/secure/client-key.pem'),      // Приватний ключ клієнта
  cert: fs.readFileSync('E:/NU/LP/TZI/krr21/secure/client-certificate.pem'),  // Сертифікат клієнта
  rejectUnauthorized: true,
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();
