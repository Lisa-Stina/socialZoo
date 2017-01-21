var mongoose = require('mongoose');
var Zoo = mongoose.model('zoo');


//////////////////////////////////////zooGetAll////////////////////////////////////////////////////////////

module.exports.getAll = function(req, res) {

  Zoo
    .find()
    .exec(function(err, zoos) {
      if (err){
        res
          .status(500)
          .json(err);
      } else {
        res
          .json(zoos);
        }
      });

};
//////////////////////////////////////zooGetOne////////////////////////////////////////////////////////////

module.exports.ZooGetOne = function(req, res) {
  var id = req.params.zooId;

  console.log('GET zooId', id);

  Zoo

    .findById(id)
    .exec(function(err, zoo){
      if(err){
        res
          .status(500)
          .json(err);
      }
      else{
        res
          .json(zoo);
      }
    });
};
//////////////////////////////////////ZooAddOne////////////////////////////////////////////////////////////


module.exports.ZooAddOne = function(req, res) {

  Zoo
    .create({
      name : req.body.name,
      username : req.body.username,
      password : req.body.password,
      email: req.body.email,
      description: req.body.description,
      country : req.body.country,
      city : req.body.city,
      category : req.body.category,
      openingYear : parseInt(req.body.openingYear),
      numberAnimals : parseInt(req.body.numberAnimals),
      picture : req.body.picture,
      createOn : req.body.createOn,
      modifyOn : req.body.modifyOn
    }, function(err, zoo){
      if (err){
        console.log(err);
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(zoo);
      }
    });
};

//////////////////////////////////////zooUpdateOne////////////////////////////////////////////////////////////
module.exports.ZooUpdateOne = (req, res) => {
  var zooId = req.params.zooId;

  console.log('Get zooId', zooId);

  Zoo
    .findById(zooId)
    .select('-reviews')
    .exec(function(err, zoo){
      if (err){
        console.log("Error finding zoo");
        res
          .status(500)
          .json(err);
          return;
      } else if(!zoo) {
        console.log("ZooId not found in database", zooId);
        res
          .status(404)
          .json({
            "message" : "Zoo Id not found " + id
          });
          return;
      }
      zoo.name = req.body.name;
      zoo.username = req.body.username;
      zoo.password = req.body.password;
      zoo.email = req.body.email;
      zoo.description = req.body.description;
      zoo.country = req.body.country;
      zoo.city = req.body.city;
      zoo.category = req.body.category;
      zoo.openingYear = parseInt(req.body.openingYear);
      zoo.numberAnimals = parseInt(req.body.numberAnimals);
      zoo.picture = req.body.picture;


    zoo
      .save(function(err, zooUpdated){
        if(err){
          res
            .status(500)
            .json(err);
        } else {
          res
            .status(204)
            .json();
        }
      });
    });
};
