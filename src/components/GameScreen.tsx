import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="cyber-backdrop flex min-h-full flex-col bg-bg-deep">
      <header className="hud-frame mx-3 mt-3 rounded-xl bg-bg-panel/90 px-3 py-2 sm:mx-5 sm:px-4">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onReset}
            className="rounded-md border border-neon-blue/40 bg-bg-panel-soft px-3 py-1.5 text-xs font-display uppercase tracking-[0.16em] text-neon-blue transition-colors hover:border-neon-cyan hover:text-neon-cyan"
          >
            Back
          </button>
          <h1 className="neon-title text-lg font-black uppercase text-white sm:text-xl">Soc Ops</h1>
          <span className="text-[11px] uppercase tracking-[0.18em] text-text-muted">Grid 5x5</span>
        </div>
      </header>

      <p className="px-6 py-3 text-center text-xs uppercase tracking-[0.18em] text-text-muted sm:text-sm">
        Tap a square when you find someone matching the objective.
      </p>

      {hasBingo && (
        <div className="win-banner px-4 py-2 text-center text-sm font-display uppercase tracking-[0.2em] text-neon-lime">
          BINGO unlocked. Signal line secured.
        </div>
      )}

      <div className="flex flex-1 items-center justify-center p-3 sm:p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
