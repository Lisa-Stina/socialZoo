var mongoose = require('mongoose');
var Zoo = mongoose.model('zoo');

module.exports.reviewGetAll = function(req, res){
  var id = req.params.zooId;
  console.log('GET reviews for zooId', id);

  //console.log('GET zooId', zooId);

  Zoo
    .findById(id)
    .select('reviews')
    .exec(function(err, doc) {
      res
        .status(200)
        .json(doc.reviews);
    });
};

module.exports.reviewGetOne = function(req, res){
  var zooId = req.params.zooId;
  var reviewId = req.params.reviewId ;
  console.log('GET reviewId ' + reviewId + ' for zooId ' + zooId);

    Zoo
      .findById(zooId)
      .select('reviews')
      .exec(function(err, data) {
        var response = {
          status : 200,
          message : {}
        };
        if (err) {
          console.log("Error finding hotel");
          response.status = 500;
          response.message = err;
        } else if(!data) {
          console.log("Zoo id not found in database", id);
          response.status = 404;
          response.message = {
            "message" : "Zoo ID not found " + id
          };
        } else {
          // Get the review
          response.message = zoo.reviews.id(reviewId);
          // If the review doesn't exist Mongoose returns null
          if (!response.message) {
            response.status = 404;
            response.message = {
              "message" : "Review ID not found " + reviewId
            };
          }
        }
        res
          .status(response.status)
          .json(response.message);
        });
  };
//////////////////////////////////////////////////
  var _addReview = function(req, res, zoo){

    zoo.reviews.push({
      name: req.body.name,
      review: req.body.review
    });

  zoo.save(function(err, zooUpdated){
    if(err){
      res
        .status(500)
        .json(err);
      } else {
      res
        .status(200)
        .json(zooUpdated.reviews[zooUpdated.reviews.length -1]);
      }
    });
  };

/////////////////////////////@ POST////////////////////////////

  module.exports.reviewAddOne = function(req, res){
   var id = req.params.zooId;
   console.log('POST review to zooId', id);

  Zoo
    .findById(id)
     .select('reviews')
     .exec(function(err, data){
       var response = {
         status : 200,
         message : []
       };
       if (err) {
         console.log("Error finding zoo");
         response.status = 500;
         response.message = err;
       } else if(!data) {
         console.log("Zoo id not found in database", id);
         response.status = 404;
         response.message = {
           "message" : "Zoo ID not found " + id
         };
       }
       if(data){
         _addReview(req, res, data);
       } else {
         res
           .status(response.status)
           .json(response.message);
       }
     });
   };
