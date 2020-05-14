////////////////////// modules co san ///////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const mongodb = require('mongoose');
const ObjectId = require('mongodb').ObjectId; 
const router = express.Router();
const cors = require('cors');
require('dotenv/config');
/////////////////////// modules tu khai bao //////////////////////////////////
const schema = require('./model/schema');
const dssanpham = require('./model/saleproduct');
const dsspnoibat = require('./model/sanphamnoibat');

// routes
// var admin = require('./routes/admin');
// var checkout = require('./routes/checkout');
// var contact = require('./routes/contact');
var index = require('./routes/index');
var shop_details = require('./routes/shop-details');
// var shoping_cart = require('./routes/shoping-cart');

// connect mongodb
mongodb
  .connect(process.env.DB_CONNECT, {
    dbName: 'tmdt',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connect database seccess !!!');
  });

  //use engine
app.set('views', './views');
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// listen port 
const port = 3000;
app.listen(port, console.log(`Listening on port ${port}...`));

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// this middleware use to build restful api so need this line to fix 'no access control allow origin' OK
app.use(cors());

// app.use(app.router);
// routes.initialize(app);

app.use('/', index);
// app.use('/checkout', checkout);
// app.use('/contact', contact);
app.use('/shop-details', shop_details);
// app.use('/shoping-cart', shoping_cart);


module.exports = app;
module.exports = router ;
















//////// can sua //////////////////////////////////
// app.get('/', async (req, res) => {
//   const data = await dssanpham.find({trangthai:"con"});
//   // console.log(data);
//   const data2 = await dsspnoibat.find({ trangthai: "con" });
//   res.render('index', {listsp:data,listspnoibat:data2});
// });
// app.get('/index', async (req, res) => {
//   const data = await dssanpham.find({ trangthai: 'con' });
//   const data2 = await dsspnoibat.find({ trangthai: 'con' });
//   res.render('index', { listsp: data, listspnoibat: data2 });
// });





















// app.get('/shop-details/a',  function(req, res)  {
  // var id = req.params.id;
  // console.log(id);
  // var o_id = new ObjectId(id);
  // const data_detail = await dssanpham.findOne(ObjectId(id));
  // console.log(data_detail);
  // res.render('blog');
// });


// app.get('/shop-details', function (req, res) {
//   res.render('shop-details');
// });




























/////////////////////////////////////////////////////////////////////////////////
// app.get('/blog-details', function (req, res) {
//   res.render('blog-details');
// });
// app.get('/shop-grid', function (req, res) {
//   res.render('shop-grid');
// });
// app.get('/admin', function (req, res) {
//   res.render('admin');
// });
// app.get('/shoping-cart', function (req, res) {
//   res.render('shoping-cart');
// });
// app.get('/shop-details', function (req, res) {
//   res.render('shop-details');
// });
// app.get('/blog', function (req, res) {
//   res.render('blog');
// });
// app.get('/checkout', function (req, res) {
//   res.render('checkout');
// });
// app.get('/contact', function (req, res) {
//   res.render('contact', { page: '2' });
// });
// app.get('/main', function (req, res) {});
// app.get('/about', function (req, res) {
//   res.render('about', { page: '3' });
// });
/////////////////////////////////////////////////////////////////////


// route contact
// const contactmessage = require('./model/contact');
// app.post('/contact', function (req, res) {
//   const newcontact = new contactmessage({
//     name: req.body.name,
//     email: req.body.email,
//     message: req.body.message,
//   });
//   newcontact.save();

//   res.render('index');
// });


