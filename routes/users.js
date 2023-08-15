var express = require('express');
var router = express.Router();

const exampleController = require('../controllers/exampleController')
const perpusController = require('../controllers/perpusController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/employee', exampleController.employee);
router.post('/employee', exampleController.store);
router.get('/employee/:id', exampleController.getbyid);
router.delete('/employee/:id', exampleController.delete);
router.put('/employee/:id', exampleController.update);

router.get('/perpus', perpusController.perpus)
router.get('/perpus/:id', perpusController.perpusGetbyId)
router.post('/perpus', perpusController.perpusPost)
router.delete('/perpus/:id', perpusController.perpusDeletebyId)
router.put('/perpus/:id', perpusController.perpusUpdatebyId)


module.exports = router;