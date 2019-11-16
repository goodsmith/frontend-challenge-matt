const sampleController = require('./sample-controller')
const Robot = require('./robot')

const RobotDefault = new Robot()

const RobotOne = new Robot([
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
])

const RobotTwo = new Robot([
  [1, 1, 1, 1, 1],
  [1, 1, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
])

const RobotThree = new Robot([
  [1, 1, 1, 0, 1],
  [1, 1, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
])

console.info('Robot default')
sampleController(RobotDefault)
console.info('\n\nRobot one')
sampleController(RobotOne, [0, 0], [4, 4])
console.info('\n\nRobot two')
sampleController(RobotTwo, [0, 0], [4, 4])
console.info('\n\nRobot three')
sampleController(RobotThree, [0, 0], [0, 4])
