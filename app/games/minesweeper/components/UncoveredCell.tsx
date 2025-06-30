import Image from "next/image";

import uncovered0 from "@/app/games/minesweeper/assets/uncovered-0.svg";
import uncovered1 from "@/app/games/minesweeper/assets/uncovered-1.svg";
import uncovered2 from "@/app/games/minesweeper/assets/uncovered-2.svg";
import uncovered3 from "@/app/games/minesweeper/assets/uncovered-3.svg";
import uncovered4 from "@/app/games/minesweeper/assets/uncovered-4.svg";
import uncovered5 from "@/app/games/minesweeper/assets/uncovered-5.svg";
import uncovered6 from "@/app/games/minesweeper/assets/uncovered-6.svg";
import uncovered7 from "@/app/games/minesweeper/assets/uncovered-7.svg";
import uncovered8 from "@/app/games/minesweeper/assets/uncovered-8.svg";
import uncoveredExplodedMine from "@/app/games/minesweeper/assets/uncovered-exploded-mine.svg";
import uncoveredMine from "@/app/games/minesweeper/assets/uncovered-mine.svg";
import type { Position } from "@/app/games/minesweeper/types";

type Properties = Position & {
  isMine: boolean;
  isExploded: boolean;
  value: number;
}

export default function UncoveredCell({ y, x, isMine, isExploded, value }: Properties) {
  if (isMine && isExploded) {
    return <span className="inline-block w-6 h-6 bg-orange-950 " data-cell={ `${y},${x}` }><Image alt="uncovered-exploded-mine" height={ 24 } src={ uncoveredExplodedMine.src } width={ 24 } /></span>;
  }

  if (isMine) {
    return <span className="inline-block w-6 h-6 bg-orange-950 " data-cell={ `${y},${x}` }><Image alt="uncovered-mine" height={ 24 } src={ uncoveredMine.src } width={ 24 } /></span>;
  }

  switch (value) {
  case 1: {
    return <span data-cell={ `${y},${x}` }><Image alt="uncovered-1" height={ 24 } src={ uncovered1.src } width={ 24 } /></span>;
  }
  case 2: {
    return <span data-cell={ `${y},${x}` }><Image alt="uncovered-2" height={ 24 } src={ uncovered2.src } width={ 24 } /></span>;
  }
  case 3: {
    return <span data-cell={ `${y},${x}` }><Image alt="uncovered-3" height={ 24 } src={ uncovered3.src } width={ 24 } /></span>;
  }
  case 4: {
    return <span data-cell={ `${y},${x}` }><Image alt="uncovered-4" height={ 24 } src={ uncovered4.src } width={ 24 } /></span>;
  }
  case 5: {
    return <span data-cell={ `${y},${x}` }><Image alt="uncovered-5" height={ 24 } src={ uncovered5.src } width={ 24 } /></span>;
  }
  case 6: {
    return <span data-cell={ `${y},${x}` }><Image alt="uncovered-6" height={ 24 } src={ uncovered6.src } width={ 24 } /></span>;
  }
  case 7: {
    return <span data-cell={ `${y},${x}` }><Image alt="uncovered-7" height={ 24 } src={ uncovered7.src } width={ 24 } /></span>;
  }
  case 8: {
    return <span data-cell={ `${y},${x}` }><Image alt="uncovered-8" height={ 24 } src={ uncovered8.src } width={ 24 } /></span>;
  }
  default: {
    return <span data-cell={ `${y},${x}` }><Image alt="uncovered-0" height={ 24 } src={ uncovered0.src } width={ 24 } /></span>;
  }
  }
}
