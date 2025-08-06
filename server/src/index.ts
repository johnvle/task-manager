const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());


app.get('/', (_req: any, res: any) => {
  res.send('Welcome to the Task Manager API!');
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
