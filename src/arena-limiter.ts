import { Arena, Location } from './types';

export function arenaLimiter(arena: Arena, location: Location) {
  const { corner1, corner2 } = arena;
  const { x, y } = location;
  if (x <= corner1.x || x >= corner2.x || y <= corner1.y || y >= corner2.y) {
    return false;
  }
  return true;
}
