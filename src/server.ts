import express from 'express';
import { config } from 'dotenv';

const PORT = Number(process.env.PORT) || 5000;

config({ override: true });

const app = express();

app.get('/', (_, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
