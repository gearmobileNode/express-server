import express from 'express';
import { config } from 'dotenv';

const PORT = process.env.PORT || 5000;

config();

const app = express();
app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
