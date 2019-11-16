/* eslint-disable no-plusplus */
class Robot {
  constructor(
    matrix = [
      [1, 1, 1, 1],
      [0, 1, 1, 0],
      [0, 1, 0, 1],
      [0, 1, 1, 1],
      [1, 1, 1, 1],
    ]
  ) {
    this.matrix = matrix
  }

  findAdjacentPaths(position) {
    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ]

    const paths = []

    for (let j = 0; j < 4; j++) {
      const d = directions[j]
      const newPosition = [position[0] + d[0], position[1] + d[1]]
      if (
        newPosition[0] >= 0 &&
        newPosition[1] >= 0 &&
        newPosition[0] < this.matrix.length &&
        newPosition[1] < this.matrix[0].length &&
        this.matrix[newPosition[1]][newPosition[0]] === 1
      ) {
        paths.push(newPosition)
      }
    }

    return paths
  }
}

module.exports = Robot
