import type { Position } from "@/app/games/minesweeper/types";

type Properties = Position & {
  isFlagged: boolean;
  isToBeOpened: boolean;
}

export default function CoveredCell({ y, x, isFlagged, isToBeOpened }: Properties) {
  if (isToBeOpened) {
    return (
      <span
        className="inline-block w-6 h-6 bg-gray-500 select-none"
        data-cell={ `${y},${x}` }
      />
    );
  }

  if (isFlagged) {
    return (
      <span
        className="inline-block w-6 h-6 bg-gray-500 border-t-2 border-l-2 border-t-gray-200 border-l-gray-200 border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 select-none"
        data-cell={ `${y},${x}` }
      >
        <svg
          data-cell={ `${y},${x}` }
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <rect fill="black" height="16" width="2" x="6" y="3" />
          <polygon fill="red" points="8,3 18,6 8,10" />
        </svg>
      </span>
    );
  }

  return (
    <span
      className="inline-block w-6 h-6 bg-gray-500 border-t-2 border-l-2 border-t-gray-200 border-l-gray-200 border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 select-none"
      data-cell={ `${y},${x}` }
    />
  );
}
