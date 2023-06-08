require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');

db.authenticate()
  .then(() => console.log('database auth'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('database sync'))
  .catch((err) => console.log(err));

const PORT1 = process.env.PORT1;
app.listen(PORT1, () => {
  console.log(`server running on port: ${PORT1} 🤪`);
});
