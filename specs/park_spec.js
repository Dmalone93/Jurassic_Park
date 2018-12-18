const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  const dinosaur = new Dinosaur('t-rex', 'meat', 50);
  const dinosaur2 = new Dinosaur('t-rex', 'meat', 60);
  const dinosaur3 = new Dinosaur('t-rex', 'meat', 70);

  beforeEach(function () {
    park = new Park('Jurassic Park', 20)

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
    park.addDinosaur(dinosaur)
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur])
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.removeDinosaur(dinosaur)
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.findDinosaur()
    assert.deepStrictEqual(actual, [dinosaur])
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

  // Calculate the total number of visitors per day

  // Calculate the total number of visitors per year

  // Calculate the total revenue from ticket sales for one year
});
