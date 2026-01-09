import express from 'express';
import { config } from 'dotenv';

const PORT = process.env.PORT || 5000;

config();

const app = express();
app.get('/', (_, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
