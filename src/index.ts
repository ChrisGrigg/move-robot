import { moveRobot } from './move-robot';

let inputData = '';

process.stdin.resume();
process.stdin.on('data', (data) => {
  inputData += data;
});

process.stdin.on('end', () => {
  const inputObject = JSON.parse(inputData);
  const response = moveRobot(inputObject);
  console.log(JSON.stringify(response));
});
