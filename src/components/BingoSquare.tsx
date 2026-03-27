import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex min-h-[64px] select-none items-center justify-center rounded-md border p-1 text-center font-mono text-[11px] leading-tight tracking-wide transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-1 focus-visible:ring-offset-bg-panel';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'animate-[neon-pulse_0.75s_ease-in-out_infinite] border-neon-lime bg-neon-magenta/20 text-neon-lime shadow-lg'
      : 'border-marked-border bg-marked text-neon-cyan shadow-md'
    : 'border-neon-blue/40 bg-bg-panel-soft/85 text-text-primary hover:border-neon-cyan hover:shadow-md active:scale-95';

  const freeSpaceClasses = square.isFreeSpace
    ? 'border-neon-blue bg-neon-blue/15 font-display text-[13px] uppercase tracking-wider text-neon-blue'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-0.5 top-0.5 text-xs text-neon-lime">+</span>
      )}
    </button>
  );
}
