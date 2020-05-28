/**
Write a robot simulator.

A robot factory's test facility needs a program to verify robot movements. The robots have three possible movements:
* turn right
* turn left
* advance

Robots are placed on a hypothetical infinite grid, facing a particular direction (north, east, south, or west) at a set of {x,y} coordinates, e.g., {3,8}, with coordinates increasing to the north and east.

The robot then receives a number of instructions, at which point the testing facility verifies the robot's new position, and in which direction it is pointing. The letter-string "RAALAL" means:
* Turn right
* Advance twice
* Turn left
* Advance once
* Turn left yet again

Say a robot starts at {7, 3} facing north. Then running this stream of instructions should leave it at {9, 4} facing west.
*/

var Mocha = require('mocha')
var mocha = new Mocha()
var chai = require('chai')
var sinon = require('sinon')
var sinonChai = require('sinon-chai')
var expect = chai.expect;
mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('Robot', function() {
  var robot = new Robot();

  it('robot bearing', function() {
    var directions = ['east', 'west', 'north', 'south'];

    for (var i = 0; i < directions.length; i++) {
      var currentDirection = directions[i];
      robot.orient(currentDirection);
      expect(robot.bearing).to.equal(currentDirection);
    }
  });


  it('turn right from north', function() {
    robot.orient('north');
    robot.turnRight();
    expect(robot.bearing).to.equal('east');
  });

  it('turn right from east', function() {
    robot.orient('east');
    robot.turnRight();
    expect(robot.bearing).to.equal('south');
  });

  it('turn right from south', function() {
    robot.orient('south');
    robot.turnRight();
    expect(robot.bearing).to.equal('west');
  });

  it('turn right from west', function() {
    robot.orient('west');
    robot.turnRight();
    expect(robot.bearing).to.equal('north');
  });

  it('turn left from north', function() {
    robot.orient('north');
    robot.turnLeft();
    expect(robot.bearing).to.equal('west');
  });

  it('turn left from east', function() {
    robot.orient('east');
    robot.turnLeft();
    expect(robot.bearing).to.equal('north');
  });

  it('turn left from south', function() {
    robot.orient('south');
    robot.turnLeft();
    expect(robot.bearing).to.equal('east');
  });

  it('turn left from west', function() {
    robot.orient('west');
    robot.turnLeft();
    expect(robot.bearing).to.equal('south');
  });

  it('robot coordinates', function() {
    robot.at(3, 0);
    expect(robot.coordinates).to.have.ordered.members([3, 0]);
  });

  it('other robot coordinates', function() {
    robot.at(-2, 5);
    expect(robot.coordinates).to.have.ordered.members([-2, 5]);
  });

  it('advance when facing north', function() {
    robot.at(0, 0);
    robot.orient('north');
    robot.advance();
    expect(robot.coordinates).to.have.ordered.members([0, 1]);
  });

  it('advance when facing east', function() {
    robot.at(0, 0);
    robot.orient('east');
    robot.advance();
    expect(robot.coordinates).to.have.ordered.members([1, 0]);
  });

  it('advance when facing south', function() {
    robot.at(0, 0);
    robot.orient('south');
    robot.advance();
    expect(robot.coordinates).to.have.ordered.members([0, -1]);
  });

  it('advance when facing west', function() {
    robot.at(0, 0);
    robot.orient('west');
    robot.advance();
    expect(robot.coordinates).to.have.ordered.members([-1, 0]);
  });

  it('advance when facing west 10 times', function() {
    robot.at(0, 0);
    robot.orient('west');
    robot.advance(10);
    expect(robot.coordinates).to.have.ordered.members([-10, 0]);
  });

  it('instructions for turning left', function() {
    expect(robot.instructions('L')).to.have.members(['turnLeft']);
  });

  it('instructions for turning right', function() {
    expect(robot.instructions('R')).to.have.members(['turnRight']);
  });

  it('instructions for advancing', function() {
    expect(robot.instructions('A')).to.have.members(['advance']);
  });

  it('series of instructions', function() {
    expect(robot.instructions('RAAL'))
      .to.have.members(['turnRight', 'advance', 'advance', 'turnLeft']);
  });

  it('place robot', function() {
    robot.place({ x: -2, y: 1, direction: 'east' });

    expect(robot.coordinates).to.have.ordered.members([-2, 1]);
    expect(robot.bearing).to.equal('east');
  });

  it('instruct robot', function() {
    robot.place({ x: -2, y: 1, direction: 'east' });
    robot.evaluate('RLAALAL');

    expect(robot.coordinates).to.have.ordered.members([0, 2]);
    expect(robot.bearing).to.equal('west');
  });

  it('instruct many robots', function() {
    var robot1 = new Robot();
    var robot2 = new Robot();
    var robot3 = new Robot();
    robot1.place({ x: 0, y: 0, direction: 'north' });
    robot2.place({ x: 2, y: -7, direction: 'east' });
    robot3.place({ x: 8, y: 4, direction: 'south' });
    robot1.evaluate('LAAARALA');
    robot2.evaluate('RRAAAAALA');
    robot3.evaluate('LAAARRRALLLL');

    expect(robot1.coordinates).to.have.ordered.members([-4, 1]);;
    expect(robot1.bearing).to.equal('west');
    expect(robot2.coordinates).to.have.ordered.members([-3, -8]);
    expect(robot2.bearing).to.equal('south');

    expect(robot3.coordinates).to.have.ordered.members([11, 5]);
    expect(robot3.bearing).to.equal('north');
  });
});

mocha.run()
