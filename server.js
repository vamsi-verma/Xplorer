const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Uncaught exception errors.
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION !!');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {});

//Unhandled rejection error handling
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION!! shutting down....');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
