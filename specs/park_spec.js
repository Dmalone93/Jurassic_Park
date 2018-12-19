const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  let trex;
  let herbasauce;

  beforeEach(function () {

    park = new Park('Jurassic Park', 20)

     trex = new Dinosaur('trex', 'meat', 50);
     herbas = new Dinosaur('herbas', 'sauceyherbs', 70);

  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });
  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(trex)
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [trex])
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosaur(trex)
    park.removeDinosaur(trex)
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  //arrange
  //act
  //assert
  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(trex)
    park.addDinosaur(herbas)
    const actual = park.findPopularDinosaur()
    assert.deepStrictEqual(actual, herbas)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(trex);
    park.addDinosaur(herbas);
    const actual = park.findSpecies('herbas');
    assert.deepStrictEqual(actual, [herbas])
  });

  it('should be able to find number of visitors per day', function(){
    park.addDinosaur(trex);
    park.addDinosaur(herbas);
    const actual = park.numberOfDailyVisitors();
    assert.strictEqual(actual, 120);
  })

  it('should be able to find number of visitors per year', function(){
    park.addDinosaur(trex);
    park.addDinosaur(herbas);
    const actual = park.numberOfYearlyVisitors();
    assert.strictEqual(actual, 43800)
  })

  it('should be able to Calculate total revenue from ticket sales for one year', function(){
    park.addDinosaur(trex);
    park.addDinosaur(herbas);
    const actual = park.calculateYearlyRevenue();
    assert.strictEqual(actual, 876000)
  })

  it('should be able to remove all dinosaurs of a particular species');

  // Calculate the total number of visitors per day

  // Calculate the total number of visitors per year

  // Calculate the total revenue from ticket sales for one year
});
