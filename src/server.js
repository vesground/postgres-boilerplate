const app = require('./src/index');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});