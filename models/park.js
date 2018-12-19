const Park = function (name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}


Park.prototype.addDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.pop(dinosaur);
};



Park.prototype.findPopularDinosaur = function(dinosaur3){

  sorted = this.collectionOfDinosaurs.sort(function (a, b) {
  return a.guestsAttractedPerDay - b.guestsAttractedPerDay;
});

return sorted[0]

};
module.exports = Park;
