import { MINE } from "@/app/games/minesweeper/constants";
import type { Position, MetaInformation } from "@/app/games/minesweeper/types";
import { generateRandomNumbers } from "@/app/games/minesweeper/utils/map.helper";

export function defineMinesPosition(metaInformationByLevel: MetaInformation, firstClickPosition?: Position): number[][] {
  const randomMines = generateRandomNumbers(
    metaInformationByLevel.width * metaInformationByLevel.height,
    metaInformationByLevel.mineCount,
    firstClickPosition ? firstClickPosition.y * metaInformationByLevel.width + firstClickPosition.x : undefined,
  );

  const minePositions: number[][] = [];

  for (const randomMine of randomMines) {
    const y = Math.floor(randomMine / metaInformationByLevel.width);
    const x = randomMine % metaInformationByLevel.width;
    minePositions.push([y, x]);
  }

  return minePositions;
}

export function countAdjacentMines(map: number[][], { y, x }: Position): number {
  let adjcentMineCount = 0;
  const fromRow = Math.max(0, y - 1);
  const toRow = Math.min(map.length - 1, y + 1);
  const fromColumn = Math.max(0, x - 1);
  const toColumn = Math.min(map[0].length - 1, x + 1);

  for (let row = fromRow; row <= toRow; row++) {
    for (let column = fromColumn; column <= toColumn; column++) {
      if (map[row][column] === MINE) {
        adjcentMineCount++;
      }
    }
  }

  return adjcentMineCount;
}

export function createMap(metaInformationByLevel: MetaInformation, firstClickPosition?: Position): number[][] {
  const minePositions = defineMinesPosition(metaInformationByLevel, firstClickPosition);
  const map: number[][] = [];

  for (let y = 0; y < metaInformationByLevel.height; y++) {
    map[y] = Array.from({ length: metaInformationByLevel.width }, () => 0);
  }
  for (const [y, x] of minePositions) {
    map[y][x] = MINE;
  }

  for (let y = 0; y < metaInformationByLevel.height; y++) {
    for (let x = 0; x < metaInformationByLevel.width; x++) {
      if (map[y][x] === MINE) {
        continue;
      }

      map[y][x] = countAdjacentMines(map, { y, x });
    }
  }

  return map;
}
