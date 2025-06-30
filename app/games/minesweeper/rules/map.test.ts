import { MINE } from "@/app/games/minesweeper/constants";
import { defineMinesPosition, countAdjacentMines } from "@/app/games/minesweeper/rules/map";

describe("minesweeper map", () => {
  describe("defineMinesPosition", () => {
    it("첫 번째 클릭의 column position과 row position이 인자로 전달되면 해당 위치는 지뢰가 아니다", () => {
      for (let try_ = 0; try_ < 5; try_++) {
        // given, when
        const firstClickPosition = { x: 0, y: 0 };
        const positions = defineMinesPosition({ width: 4, height: 5, mineCount: 5 }, firstClickPosition);

        // then
        expect(positions).not.toContain([firstClickPosition.y, firstClickPosition.x]);
      }
    });
  });

  describe("countAdjacentMines", () => {
    it("격자에서 인접한 MINE의 개수를 반환한다", () => {
      // given
      const grid = [
        [0,    0,    0,    MINE],
        [0,    0,    MINE, MINE],
        [0,    MINE, 0,    MINE],
        [MINE, 0,    0,    MINE],
      ];

      // when
      let mineCount = countAdjacentMines(grid, { y: 0, x: 0 });

      // then
      expect(mineCount).toBe(0);

      // when
      mineCount = countAdjacentMines(grid, { y: 0, x: 1 });

      // then
      expect(mineCount).toBe(1);

      // when
      mineCount = countAdjacentMines(grid, { y: 0, x: 2 });

      // then
      expect(mineCount).toBe(3);

      // when
      mineCount = countAdjacentMines(grid, { y: 1, x: 0 });

      // then
      expect(mineCount).toBe(1);

      // when
      mineCount = countAdjacentMines(grid, { y: 1, x: 1 });

      // then
      expect(mineCount).toBe(2);

      // when
      mineCount = countAdjacentMines(grid, { y: 2, x: 0 });

      // then
      expect(mineCount).toBe(2);

      // when
      mineCount = countAdjacentMines(grid, { y: 2, x: 2 });

      // then
      expect(mineCount).toBe(5);

      // when
      mineCount = countAdjacentMines(grid, { y: 3, x: 1 });

      // then
      expect(mineCount).toBe(2);

      // when
      mineCount = countAdjacentMines(grid, { y: 3, x: 2 });

      // then
      expect(mineCount).toBe(3);
    });
  });
});
