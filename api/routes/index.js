var express = require('express');
var router = express.Router();

var ctrlZoo = require('../controllers/zoo.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

router
  .route('/zoo')
  .get(ctrlZoo.getAll)
  .post(ctrlZoo.ZooAddOne);

router
  .route('/zoo/:zooId')
  .get(ctrlZoo.ZooGetOne)
  .put(ctrlZoo.ZooUpdateOne);

router
  .route('/zoo/:zooId/reviews')
  .post(ctrlReviews.reviewAddOne)
  .get(ctrlReviews.reviewGetAll);

router
    .route('/zoo/:zooId/reviews/:reviewId')
    .get(ctrlReviews.reviewGetOne);


module.exports = router;
