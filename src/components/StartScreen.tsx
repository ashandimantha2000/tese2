interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="cyber-backdrop flex min-h-full items-center justify-center p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(0_245_255/15%),transparent_36%),radial-gradient(circle_at_80%_25%,rgb(255_46_166/15%),transparent_42%)]" />

      <section className="relative w-full max-w-md rounded-2xl neon-panel px-6 py-8 text-center sm:px-8 sm:py-10">
        <p className="mb-2 font-display text-xs uppercase tracking-[0.45em] text-neon-cyan/80">Live Signal</p>
        <h1 className="neon-title glitch-text mb-3 text-4xl font-black uppercase text-white sm:text-5xl">
          Soc Ops
        </h1>
        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-neon-blue/90">Social Bingo Protocol</p>

        <div className="mb-8 rounded-xl hud-frame bg-bg-panel-soft/75 p-5 text-left">
          <h2 className="mb-3 font-display text-sm uppercase tracking-[0.22em] text-neon-cyan">Mission Brief</h2>
          <ul className="space-y-2 text-sm leading-relaxed text-text-muted">
            <li>Find people who match each square.</li>
            <li>Tap a square every time you confirm a match.</li>
            <li>Complete any line of five to trigger BINGO.</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="neon-button w-full rounded-xl px-8 py-4 font-display text-base uppercase tracking-[0.22em]"
        >
          Initiate Run
        </button>
      </section>
    </div>
  );
}
