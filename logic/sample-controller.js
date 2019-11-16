/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
function sampleController(robot, initial = [0, 0], final = [2, 3], verbose = false) {
  const visited = [initial]
  const generations = []
  const pathTree = []
  let reached = false
  let i = 0

  while (!reached) {
    if (verbose) {
      console.info(`\nGeneration n. ${i + 1}`)
    }
    if (i === 0) {
      const adjacent = robot.findAdjacentPaths(initial)
      generations.push(adjacent)
      visited.push(...adjacent)
      pathTree.push([{ from: initial, to: adjacent }])
      if (verbose) {
        console.info(`\tInitial position: ${JSON.stringify(initial)}`)
        console.info(`\tDiscovered this generation: ${JSON.stringify(adjacent)}`)
      }

      i += 1
      continue
    }
    const previous = generations[i - 1]
    generations[i] = []
    pathTree[i] = []

    for (let j = 0; j < previous.length; j++) {
      const adjacent = robot.findAdjacentPaths(previous[j])
      const nextPositions = adjacent.filter(a => !visited.some(d => a[0] === d[0] && a[1] === d[1]))
      if (verbose) {
        console.info(`\tDiscovered this generation: ${JSON.stringify(nextPositions)}`)
      }

      generations[i].push(...nextPositions)
      visited.push(...nextPositions)
      pathTree[i].push({ from: previous[j], to: nextPositions })
      reached = visited.some(d => d[0] === final[0] && d[1] === final[1])
    }

    i += 1
  }

  const steps = [final]
  let from = final
  for (let j = 1; j <= pathTree.length; j++) {
    const path = pathTree[pathTree.length - j]
    for (let k = 0; k < path.length; k++) {
      const { to } = path[k]

      if (!to.length) {
        continue
      }

      for (let y = 0; y < to.length; y++) {
        if (to[y][0] === from[0] && to[y][1] === from[1]) {
          from = path[k].from
          steps.splice(0, 0, from)
          break
        }
      }
    }
  }

  console.info(`\nThe steps are ${JSON.stringify(steps)}`)
  if (verbose) {
    console.info(`It takes ${steps.length - 1} steps`)
  }

  return steps
}

module.exports = sampleController
