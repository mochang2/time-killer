import Uncovered0 from "@/app/games/minesweeper/assets/uncovered-0.svg";
import Uncovered1 from "@/app/games/minesweeper/assets/uncovered-1.svg";
import Uncovered2 from "@/app/games/minesweeper/assets/uncovered-2.svg";
import Uncovered3 from "@/app/games/minesweeper/assets/uncovered-3.svg";
import Uncovered4 from "@/app/games/minesweeper/assets/uncovered-4.svg";
import Uncovered5 from "@/app/games/minesweeper/assets/uncovered-5.svg";
import Uncovered6 from "@/app/games/minesweeper/assets/uncovered-6.svg";
import Uncovered7 from "@/app/games/minesweeper/assets/uncovered-7.svg";
import Uncovered8 from "@/app/games/minesweeper/assets/uncovered-8.svg";
import UncoveredExplodedMine from "@/app/games/minesweeper/assets/uncovered-exploded-mine.svg";
import UncoveredMine from "@/app/games/minesweeper/assets/uncovered-mine.svg";
import type { Position } from "@/app/games/minesweeper/types";

type Properties = Position & {
  isMine: boolean;
  isExploded: boolean;
  value: number;
}

export default function UncoveredCell({ y, x, isMine, isExploded, value }: Properties) {
  if (isMine && isExploded) {
    return <span className="inline-block w-6 h-6 bg-orange-950 " data-cell={ `${y},${x}` }><UncoveredExplodedMine height={ 24 } width={ 24 } /></span>;
  }

  if (isMine) {
    return <span className="inline-block w-6 h-6 bg-orange-950 " data-cell={ `${y},${x}` }><UncoveredMine height={ 24 } width={ 24 } /></span>;
  }

  switch (value) {
  case 1: {
    return <span data-cell={ `${y},${x}` }><Uncovered1 height={ 24 } width={ 24 } /></span>;
  }
  case 2: {
    return <span data-cell={ `${y},${x}` }><Uncovered2 height={ 24 } width={ 24 } /></span>;
  }
  case 3: {
    return <span data-cell={ `${y},${x}` }><Uncovered3 height={ 24 } width={ 24 } /></span>;
  }
  case 4: {
    return <span data-cell={ `${y},${x}` }><Uncovered4 height={ 24 } width={ 24 } /></span>;
  }
  case 5: {
    return <span data-cell={ `${y},${x}` }><Uncovered5 height={ 24 } width={ 24 } /></span>;
  }
  case 6: {
    return <span data-cell={ `${y},${x}` }><Uncovered6 height={ 24 } width={ 24 } /></span>;
  }
  case 7: {
    return <span data-cell={ `${y},${x}` }><Uncovered7 height={ 24 } width={ 24 } /></span>;
  }
  case 8: {
    return <span data-cell={ `${y},${x}` }><Uncovered8 height={ 24 } width={ 24 } /></span>;
  }
  default: {
    return <span data-cell={ `${y},${x}` }><Uncovered0 height={ 24 } width={ 24 } /></span>;
  }
  }
}
