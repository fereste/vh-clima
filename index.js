const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

// Array of Spanish weather conditions
const weatherConditions = [
  'soleado',
  'nublado',
  'lluvioso',
  'tormentoso',
  'nevado',
  'ventoso',
  'parcialmente nublado',
  'despejado'
];

// GET /api/v1/weather endpoint
app.get('/api/v1/weather', (req, res) => {
  // Generate random temperature between -10 and 40 degrees Celsius
  const temperature = Math.floor(Math.random() * 51) - 10;
  
  // Select random weather condition in Spanish
  const weather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  
  res.status(200).json({
    temperature,
    weather
  });
});

// GET /health endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
