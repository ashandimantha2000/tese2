interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 p-4 backdrop-blur-sm">
      <div className="neon-panel w-full max-w-sm rounded-2xl p-6 text-center animate-[modal-drop-in_0.55s_cubic-bezier(0.22,1,0.36,1)] sm:p-8">
        <p className="mb-2 font-display text-xs uppercase tracking-[0.35em] text-neon-cyan">Priority Event</p>
        <h2 className="neon-title mb-3 text-3xl font-black uppercase text-neon-lime sm:text-4xl">Bingo</h2>
        <p className="mb-7 text-sm uppercase tracking-[0.16em] text-text-muted">Line complete. Keep the network moving.</p>

        <button
          onClick={onDismiss}
          className="neon-button w-full rounded-xl px-6 py-3 font-display text-sm uppercase tracking-[0.22em]"
        >
          Continue Run
        </button>
      </div>
    </div>
  );
}
