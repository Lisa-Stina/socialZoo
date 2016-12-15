var mongoose = require('mongoose');
var Zoo = mongoose.model('zoo');

module.exports.reviewGetAll = function(req, res){
  var zooId = req.params.zooId;
  console.log('GET reviews for zooId', zooId);

  //console.log('GET zooId', zooId);

  Zoo
    .findById(zooId)
    .select('reviews')
    .exec(function(err, doc) {
      res
        .status(200)
        .json(doc.reviews);
    });
};

module.exports.reviewGetOne = function(req, res){
  var zooId = req.params.zooId;
  var reviewsId = req.params.reviewsId ;
  console.log('GET reviewsId ' + reviewsId + ' for zooId ' + zooId);

    Zoo
      .findById(zooId)
      .select('reviews')
      .exec(function(err, data) {
        var review = data.reviews.id(reviewsId);
        res
          .status(200)
          .json(review);
      });
  };

  module.exports.reviewAddOne = function(req, res){
   var zooId = req.params.zooId;

    Zoo
    .findById(zooId)
     .select('reviews')
     .exec(
     function(err, data){
       data.reviews.push({
         name : req.body.name,
         review : req.body.review,
         createOn : req.body.createOn
          });
       data.save(function(err, reviewsadd){
         if(err){
           res
           .status(500)
           .json(err);
         }else{
           res
           .status(201)
           .json(reviewsadd.reviews[reviewsadd.reviews.length - 1]);
         }
       });

      });
   };
