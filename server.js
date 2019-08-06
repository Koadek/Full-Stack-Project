const {
  initialItems,
  initialReviews,
  initialSellers,
} = require('./src/data.js');

let express = require('express');
let multer = require('multer');
let upload = multer({
  dest: __dirname + '/uploads/',
});
let app = express();
let cookieParser = require('cookie-parser');
app.use(cookieParser());
let reloadMagic = require('./reload-magic.js');
let passwords = {};
let sessions = {};
let items = initialItems;
let sellers = initialSellers;
let reviews = initialReviews;
reloadMagic(app);

class City {
  constructor(price, sellerId, image, title, bio) {
    this.price = price;
    this.sellerId = sellerId;
    this.image = image;
    this.title = title;
    this.id = title;
    this.reviews = [];
    this.bio = bio;
  }
}

app.use('/', express.static('build'));
app.use('/images', express.static('uploads'));

app.get('/session', function(req, res) {
  const sessionId = req.cookies.sid;
  const username = sessions[sessionId];
  if (username) {
    return res.send(JSON.stringify({ success: true, username }));
  }
  res.send(JSON.stringify({ success: false }));
});

app.get('/home', (req, res) => {
  const sessionId = req.cookies.sid;
  if (!sessions[sessionId]) {
    return res.send(
      JSON.stringify({ success: false, message: 'Invalid session' })
    );
  }
  res.send(JSON.stringify({ success: true, items, reviews, sellers }));
});

app.get('/itemDetails', (req, res) => {
  const item = items.find(item => item.id === req.query.itemId);
  const itemReviews = item.reviews.map(reviewId =>
    reviews.find(review => review.id === reviewId)
  );
  if (item) {
    return res.send(JSON.stringify({ success: true, item, itemReviews }));
  }
  res.send(
    JSON.stringify({
      success: false,
      msg: 'Cannot find what you are looking for',
    })
  );
});

app.post('/logout', (req, res) => {
  const sessionId = req.cookies.sid;
  delete sessions[sessionId];
  res.send(JSON.stringify({ success: true }));
});

app.post('/newCity', upload.single('image'), (req, res) => {
  console.log('*** inside new city');
  console.log('body', req.body);
  const sessionId = req.cookies.sid;
  const username = sessions[sessionId];
  console.log('username', username);
  const price = req.body.price;
  const sellerId = req.body.username;
  const city = req.body.title;
  const bio = req.body.bio;
  const imgPath = req.file.forEach(`/images/${req.file.filename}`);
  const newCity = new City(price, sellerId, imgPath, city, bio);
  console.log('new city', newCity);
  items = items.concat(newCity);
  console.log('updated items', items);
  res.send(JSON.stringify({ success: true }));
});

app.post('/login', upload.none(), (req, res) => {
  console.log("**** I'm in the login endpoint");
  console.log('this is the parsed body', req.body);
  let username = req.body.username;
  let enteredPassword = req.body.password;
  if (passwords[username] === undefined) {
    return res.send(JSON.stringify({ success: false }));
  }
  let expectedPassword = passwords[username];
  console.log('expected password', expectedPassword);
  if (enteredPassword === expectedPassword) {
    console.log('password matches');
    let sessionId = generateId();
    console.log('generated id', sessionId);
    sessions[sessionId] = username;
    res.cookie('sid', sessionId);
    res.send(JSON.stringify({ success: true }));
    return;
  }
  res.send(JSON.stringify({ success: false }));
});
let generateId = () => {
  return '' + Math.floor(Math.random() * 100000000);
};

app.post('/signup', upload.none(), (req, res) => {
  console.log("**** I'm in the signup endpoint");
  console.log('this is the body', req.body);
  let username = req.body.username;
  let enteredPassword = req.body.password;
  console.log(passwords[username]);
  if (passwords[username] === undefined) {
    passwords[username] = enteredPassword;
    console.log('passwords object', passwords);
    let sessionId = generateId();
    console.log('generated id', sessionId);
    sessions[sessionId] = username;
    (sellers = sellers.concat({
      id: username,
      name: username,
      rating: '',
    })),
      res.cookie('sid', sessionId);
    res.send(JSON.stringify({ success: true, username }));
    return;
  }
  res.send(JSON.stringify({ success: false, msg: 'Username taken' }));
});

app.all('/*', (req, res, next) => {
  res.sendFile(__dirname + '/build/index.html');
});
app.listen(4000, () => {
  console.log('Server started on port 4000');
});
