var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * DELETE to deleteuser.
 */
 router.delete('/deleteuser/:id', function(req,res) {
 	var db = req.db;
 	var collection = db.get('userlist');
 	var userToDelete = req.params.id;
 	collection.remove({'_id' : userToDelete},function(err) {
 		res.send((err===null) ? { msg: '' } : {msg:'error: ' + err});
 	});
 });

module.exports = router;
