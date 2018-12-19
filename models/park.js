const Park = function (name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}


Park.prototype.addDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  const index = this.collectionOfDinosaurs.indexOf(dinosaur);
  this.collectionOfDinosaurs.splice(index, 1);
};


//
Park.prototype.findPopularDinosaur = function(){

  let sorted = this.collectionOfDinosaurs.sort(function (dinosaur1, dinosaur2) {
  return dinosaur2.guestsAttractedPerDay - dinosaur1.guestsAttractedPerDay;
});
return sorted[0]
};
//---------------------------------------------------------
// If I want to find the most popular dinosaur out of a collection

// Park.prototype.findPopularDinosaur = function(){
//
//   let mostPopularDino = dinosaur3;
//   const highestVisitors = 0;
//
//   for (let dino of this.collectionOfDinosaurs);{
//     if highestVisitors >= dino.guestsAttractedPerDay {
//
//       return mostPopularDino;
//
//     }
//     return mostPopularDino;
//   }
//   }
//----------------------------------------------------------

  // Park.prototype.findPopularDinosaur = function(){
  //   let maxDinosaur = this.collectionOfDinosaurs[0];
  //   for (let dinosaur of this.collectionOfDinosaurs){
  //     if (dinosaur.guestsAttractedPerDay > maxDino.guestsAttractedPerDay){
  //     maxDino = dinosaur;
  //   }
  //   }
  //   return maxDino;
  // }

  Park.prototype.findSpecies = function(species){
    const results = []; //const here because array
    for (let dinosaur of this.collectionOfDinosaurs){
      if (dinosaur.species === species){
        results.push(dinosaur);
      }
    }
    return results;
  }

  Park.prototype.numberOfDailyVisitors = function(){
    let total = 0;
    for(let dinosaur of this.collectionOfDinosaurs){
      total += dinosaur.guestsAttractedPerDay;
    }
    return total;
  }

  Park.prototype.numberOfYearlyVisitors = function(){
    return this.numberOfDailyVisitors() * 365;
  }

  Park.prototype.calculateYearlyRevenue = function(){
    return this.numberOfYearlyVisitors() * this.ticketPrice;
  }


module.exports = Park;
