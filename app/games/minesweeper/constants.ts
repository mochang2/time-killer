export const MINE = -1;

export const OPENED = 0;

export const CLOSED = 1;

export const FLAGGED = 2;

export const DIFFICLUTIES = ["easy", "medium", "hard"] as const;

export const MAGNIFICATIONS = ["half", "default", "double", "triple"] as const;

export const META_INFORMATION: Record<typeof DIFFICLUTIES[number], {
    difficulty: number
    size: {
        width: number
        height: number
    }
    mineCount: number
}> = {
  easy: {
    difficulty: 1,
    size: {
      width: 9,
      height: 9,
    },
    mineCount: 10,
  },
  medium: {
    difficulty: 2,
    size: {
      width: 16,
      height: 16,
    },
    mineCount: 40,
  },
  hard: {
    difficulty: 3,
    size: {
      width: 30,
      height: 16,
    },
    mineCount: 99,
  },
};
