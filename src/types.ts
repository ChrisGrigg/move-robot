export interface Arena {
  corner1: {
    x: number;
    y: number;
  };
  corner2: {
    x: number;
    y: number;
  };
}

export interface Location {
  x: number;
  y: number;
}

export interface IInput {
  arena: Arena;
  location: Location;
  heading: string;
  directions: string[];
}

export interface IOutput {
  status: string;
  location: {
    x: number;
    y: number;
  };
  heading: string;
  path: string[];
}

export enum Direction {
  North = 'north',
  East = 'east',
  South = 'south',
  West = 'west',
}
