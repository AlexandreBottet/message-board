import express from 'express';
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
})

router.post('/new', function(req, res, next) {
  const { name, message } = req.body;

  messages.push({ text: message, user: name, added: new Date() });

  res.redirect(303, '/');
})

export default router;

