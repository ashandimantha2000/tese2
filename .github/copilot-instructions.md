# Copilot Instructions for Soc Ops

## Project Overview
- React + TypeScript + Vite app for a social bingo game.
- UI and orchestration live in src/components/, src/App.tsx, and hooks in src/hooks/.
- Core bingo logic and tests are in src/utils/bingoLogic.ts and src/utils/bingoLogic.test.ts.

## Environment
- Use Node.js 22+.
- Install dependencies with npm install.

## Common Commands
- Start dev server: npm run dev
- Run lint: npm run lint
- Run tests: npm run test
- Build production: npm run build

## Coding Guidelines
- Keep game state transitions centralized in hooks (prefer extending useBingoGame).
- Keep presentational concerns in components and avoid duplicating game logic in UI files.
- When adding bingo rules, update both implementation and tests.
- Prefer small, focused React components and explicit prop typing.
- Maintain TypeScript strictness and avoid any unless unavoidable.

## Testing Expectations
- Add or update tests for all non-trivial logic changes.
- Prioritize utility and state-transition tests for deterministic behavior.
- Keep tests fast and deterministic for CI (vitest run).

## Styling Notes
- Tailwind CSS v4 is used.
- Prefer tokenized, CSS-first patterns and avoid ad hoc style drift.
- Keep styles consistent with existing app visual language unless redesign is requested.

## Agent Behavior
- Before major changes, scan relevant files and existing instructions in .github/instructions/.
- For bug fixes, include a repro-oriented test whenever feasible.
- Avoid broad refactors unless required for the requested task.
