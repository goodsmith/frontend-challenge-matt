# Matt's D3 Frontend Challenge
This is the frontend challenge developed by Mateus Bueno Ferreira for D3 challenge.

## Stacks
The project is a React Single Page Application served with Express.

## Logic Test
The solution consists of a sample algorithm, where a robot finds every walkable adjacent cell.\
\
In the next generation, the robot finds every walkable adjacent cell for the adjacent cells found in the previous generation.\
\
The cells are filtered so one cell won't be checked more than once.\
\
Once the robot finds the position he is searching, we finish the current algorithm and trigger
one that traces back to the original position to find the steps to take.\
\
To run the logic test:
```
yarn logic
```


## Requirements
- Yarn v1+
- Node v11.10+

## How to run
1. Install the dependencies: `yarn`
2. Start the dev server: `yarn dev`

## Production mode
Running `yarn build` webpack will build the app into a `dist` folder and then express server will be started.
