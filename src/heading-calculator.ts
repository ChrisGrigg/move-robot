import { Direction } from './types';

export function calculateHeading(input: string, direction: string): string {
  switch (input) {
    case 'left':
      switch (direction) {
        case Direction.North:
          return Direction.West;
        case Direction.East:
          return Direction.North;
        case Direction.South:
          return Direction.East;
        case Direction.West:
          return Direction.South;
      }
      break;
    case 'right':
      switch (direction) {
        case Direction.North:
          return Direction.East;
        case Direction.East:
          return Direction.South;
        case Direction.South:
          return Direction.West;
        case Direction.West:
          return Direction.North;
      }
      break;
    default:
      return input;
  }

  return input;
}
