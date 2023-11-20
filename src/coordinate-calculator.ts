import { calculateHeading } from './heading-calculator';
import { Direction } from './types';

class CoordinateCalculator {
  private x: number;
  private y: number;
  private direction: Direction;

  constructor(defaultX = 0, defaultY = 0, defaultDirection: Direction = Direction.North) {
    this.x = defaultX;
    this.y = defaultY;
    this.direction = defaultDirection;
  }

  public calculateCoordinates(input: string, distance: number): void {
    const currentHeading = calculateHeading(input, this.direction);

    if (Object.values(Direction).includes(currentHeading as Direction)) {
      this.direction = currentHeading as Direction;
    } else if (currentHeading === 'forward') {
      this.moveForward(distance);
    } else {
      throw new Error('Invalid heading');
    }
  }

  private moveForward(distance: number): void {
    switch (this.direction) {
      case Direction.North:
        this.y += distance;
        break;
      case Direction.East:
        this.x += distance;
        break;
      case Direction.South:
        this.y -= distance;
        break;
      case Direction.West:
        this.x -= distance;
        break;
    }
  }

  public getCurrentCoordinates(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  public getCurrentDirection(): Direction {
    return this.direction;
  }
}

export default CoordinateCalculator;
