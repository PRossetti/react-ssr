const router = require('express').Router();
const React = require('react');
const { renderToString } = require('react-dom/server');
const Main = require('./components/Main').default;
const markup = require('./markup');

router.get('/ping', (req, res) => {
  res.send('app pong');
});

router.get('*', (req, res) => {
  const props = {
    name: req.query.name || 'pepito',
  };
  const jsx = renderToString(<Main {...props} />);
  const html = markup(jsx, props);
  res.send(html);
});

module.exports = router;
