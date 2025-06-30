import { DIFFICLUTIES, MAGNIFICATIONS } from "@/app/games/minesweeper/constants";
import type { Difficulty, Magnification } from "@/app/games/minesweeper/types";

export const isDifficulty = (value: string): value is Difficulty => {
  return DIFFICLUTIES.includes(value as Difficulty);
};

export const isMagnification = (value: string): value is Magnification => {
  return MAGNIFICATIONS.includes(value as Magnification);
};
