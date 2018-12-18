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



Park.prototype.findDinosaur = function(dinosaur){
  for (let dinosaur of this.collectionOfDinosaurs){
    total = 0;
    if dinosaur.guestsAttractedPerDay {
      numberOfGuests = total += dinosaur.guestsAttractedPerDay{
      }
    }
    if total === dinosaur.guestsAttractedPerDay{
    }
  }

};
module.exports = Park;
