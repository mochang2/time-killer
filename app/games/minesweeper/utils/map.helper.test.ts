import { initializeNumberPool, generateRandomNumbers } from "@/app/games/minesweeper/utils/map.helper";

describe("minesweeper map", () => {
  describe("initializeNumberPool", () => {
    it("0부터 length - 1에서 제외할 숫자가 제외된 배열을 반환한다.", () => {
      // given, when
      const result = initializeNumberPool(5, 2);

      // then
      expect(result).toEqual([0, 1, 3, 4]);
    });
  });

  describe("generateRandomNumbers", () => {
    it("주어진 개수의, 중복되지 않은 숫자들의 배열을 반환한다.", () => {
      // given
      const count = 3;

      // when
      const result = generateRandomNumbers(100, count);
      const uniqueResult = new Set(result);

      // then
      expect(result.length).toBe(count);
      expect(uniqueResult.size).toBe(count);
    });

    it("제외될 숫자가 포함되지 않는 배열을 반환한다.", () => {
      // given
      const count = 3;
      const exclude = 2;

      // when
      const result = generateRandomNumbers(100, count, exclude);

      // then
      expect(result).not.toContain(exclude);
    });
  });
});
