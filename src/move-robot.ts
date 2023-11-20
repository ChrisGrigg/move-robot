import { arenaLimiter } from './arena-limiter';
import CoordinateCalculator from './coordinate-calculator';
import { Direction, IInput, IOutput } from './types';

export function moveRobot(input: IInput) {
  const { arena, location, heading, directions } = input;
  const coordinateCalculator = new CoordinateCalculator(location.x, location.y, heading as Direction);

  function buildResponse(status: string): IOutput {
    return {
      status,
      location: { ...coordinateCalculator.getCurrentCoordinates() },
      heading: coordinateCalculator.getCurrentDirection(),
      path,
    };
  }

  const path: string[] = [];

  for (const direction of directions) {
    try {
      path.push(direction);
      coordinateCalculator.calculateCoordinates(direction, 1);

      if (!arenaLimiter(arena, coordinateCalculator.getCurrentCoordinates())) {
        path.push(direction);
        return buildResponse('crash');
      }
    } catch (e: unknown) {
      console.error((e as Error).message);
      return buildResponse('error');
    }
  }

  return buildResponse('ok');
}
