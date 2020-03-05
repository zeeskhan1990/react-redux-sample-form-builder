/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');
const mongoose = require('mongoose');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const formRouter = require('./routes/formRoutes');
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

const DB =
  'mongodb+srv://zeeshan:robertjr@cluster0-ojdah.mongodb.net/formbuilder?retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(con => {
    console.log(con.connections);
  });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// ROUTES
app.use('/api/v1/forms', formRouter);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});

// Node emits this event whenever there's an error which has not been handled anywhere, example - DB connnection fail
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION!');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Should be declared at the top of the file
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION!');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
