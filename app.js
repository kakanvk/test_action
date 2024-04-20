const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Lấy địa chỉ IP của máy chủ từ request object
  const serverIp = req.connection.remoteAddress;
  
  res.send(`Server IP Address: ${serverIp}`);
});

const server = app.listen(3000, '0.0.0.0', () => {
    const serverIp = server.address().address;
    console.log(`Server is running on ${serverIp}:${server.address().port}`);
    console.log(`Server IP Address: ${serverIp}`);
  });
