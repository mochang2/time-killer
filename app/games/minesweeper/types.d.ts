import { DIFFICLUTIES, MAGNIFICATIONS } from "@/app/games/minesweeper/constants";

export type Difficulty = typeof DIFFICLUTIES[number]

export type Magnification = typeof MAGNIFICATIONS[number]

export type Position = {
    x: number
    y: number
}

export type MetaInformation = {
    width: number
    height: number
    mineCount: number
}
