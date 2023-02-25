import express from 'express';
import * as entryMjs from '../dist/server/entry.mjs';

const app = express();
app.use(express.static('dist/client/'));
app.use(entryMjs.handler);

app.listen(4000, () => {
  console.log('Listening on http://localhost:4000');
});
