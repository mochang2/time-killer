import { MINE } from "@/app/games/minesweeper/constants";
import { defineMinesPosition, createMap } from "@/app/games/minesweeper/rules/map";
import { generateRandomNumbers } from "@/app/games/minesweeper/utils/map.helper";

jest.mock("../utils/map.helper.ts", () => ({
  __esModule: true,
  generateRandomNumbers: jest.fn(),
}));

describe("minesweeper map", () => {
  describe("defineMinesPosition", () => {
    it("column position * row position으로 이루어진 숫자들의 배열을 [y, x] 형태로 변환한다.", () => {
      // given
      (generateRandomNumbers as jest.Mock).mockReturnValueOnce([0, 2, 6, 12, 19]);

      // when
      const positions = defineMinesPosition({ width: 4, height: 5, mineCount: 5 });

      // then
      expect(positions).toEqual([[0, 0], [0, 2], [1, 2], [3, 0], [4, 3]]);
    });
  });

  describe("createMap", () => {
    it("지뢰와 인접한 지뢰 개수가 그려진 이차원 배열을 반환한다", () => {
      // given
      ;(generateRandomNumbers as jest.Mock).mockReturnValueOnce([0, 2, 6, 12, 19]);

      // when
      const map = createMap({ width: 4, height: 5, mineCount: 5 });

      // then
      expect(map).toEqual([
        [MINE,    3, MINE,    2],
        [1,    3, MINE,    2],
        [1,    2,    1,    1],
        [MINE,    1,    1,    1],
        [1,    1,    1, MINE],
      ]);
    });
  });
});
