var express = require('express');
const mongodb = require('mongoose');
const ObjectId = require('mongodb').ObjectId; 
var router = express.Router();
const dssanpham = require('../model/saleproduct');
const dsspnoibat = require('../model/sanphamnoibat');



/* GET home page. */
router.get('/', async (req, res) => {
	const data = await dssanpham.find({ trangthai: 'con' });
	  const data2 = await dsspnoibat.find({ trangthai: 'con' });
			res.render('index',{ listsp: data, listspnoibat: data2 });
   
});

router.get('/chi-tiet', async (req, res) => {

//   var id= '5eba43cda9e6012600b7c17e';
var id = req.query.id;
  console.log(id);
  var o_id = new ObjectId(id);
  const data_detail =await dssanpham.findOne(ObjectId(o_id));
  console.log(data_detail);
  res.render('shop-details',{detail_sp:data_detail});
			});
	

module.exports = router ;

