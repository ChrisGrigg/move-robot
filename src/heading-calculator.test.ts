import { calculateHeading } from './heading-calculator';
import { describe, expect, it } from '@jest/globals';
import { Direction } from './types';

enum Turn {
  Left = 'left',
  Right = 'right',
}

describe('calculateHeading', () => {
  it('should return the correct heading based on the input and direction', () => {
    expect(calculateHeading(Turn.Left, Direction.North)).toBe(Direction.West);
    expect(calculateHeading(Turn.Left, Direction.East)).toBe(Direction.North);
    expect(calculateHeading(Turn.Left, Direction.South)).toBe(Direction.East);
    expect(calculateHeading(Turn.Left, Direction.West)).toBe(Direction.South);
    expect(calculateHeading(Turn.Right, Direction.North)).toBe(Direction.East);
    expect(calculateHeading(Turn.Right, Direction.East)).toBe(Direction.South);
    expect(calculateHeading(Turn.Right, Direction.South)).toBe(Direction.West);
    expect(calculateHeading(Turn.Right, Direction.West)).toBe(Direction.North);
  });
});
