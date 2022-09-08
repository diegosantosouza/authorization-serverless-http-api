import express, { json } from 'express';
import helmet from 'helmet';

const app = express();
app.use(json());
app.use(helmet());

app.get('/open-route', (_, res) => {
  res.json({
    msg: 'Open Route',
  });
});

app.get('/closed-route', (_, res) => {
  res.json({
    msg: 'Closed Route',
  });
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export { app };
