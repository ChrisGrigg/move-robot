import { arenaLimiter } from './arena-limiter';
import { Arena, Location } from './types';
import { describe, expect, it } from '@jest/globals';

describe('arenaLimiter', () => {
  it('should return true if the location is within the arena boundaries', () => {
    const arena: Arena = {
      corner1: {
        x: 0,
        y: 0,
      },
      corner2: {
        x: 10,
        y: 10,
      },
    };
    const location: Location = {
      x: 5,
      y: 5,
    };

    const result = arenaLimiter(arena, location);

    expect(result).toBe(true);
  });

  it('should return false if the location is outside the arena boundaries', () => {
    const arena: Arena = {
      corner1: {
        x: 0,
        y: 0,
      },
      corner2: {
        x: 10,
        y: 10,
      },
    };
    const location: Location = {
      x: 15,
      y: 5,
    };

    const result = arenaLimiter(arena, location);

    expect(result).toBe(false);
  });
});
