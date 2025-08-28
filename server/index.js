const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const allowedIps = ['192.168.100.5', '127.0.0.1'];

app.use((req, res, next) => {
  const clientIp = req.ip.replace('::ffff:', ''); // normalize IPv4-mapped IPv6
  if (allowedIps.includes(clientIp)) {
    next();
  } else {
    console.log(`Unauthorized access from ${clientIp}`);
    res.status(403).send('Access denied');
  }
});

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
