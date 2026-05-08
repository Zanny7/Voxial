# AGENTS.md

## Project Goal

Voxial is an educational web app for common Greek and Latin affixes. The first
version should help users browse Greek affixes, Latin affixes, examples, and
favorites.

## Repository Safety

- Work only in the Voxial repository.
- Expected remote: `https://github.com/Zanny7/Voxial.git`.
- Stop if the current directory or Git remote is not clearly Voxial.
- Do not inspect, edit, delete, move, or commit files outside this repository.
- Use npm as the package manager.
- Use `dev` as the working branch until an explicit promotion checkpoint.

## Linear Workflow

- Work only from Linear issues in the `Voxial` project and `Voxial` team.
- Do not work without an issue.
- Work one issue at a time.
- Move the active issue to `In Progress` before implementation.
- After completion, update Linear with:
  - files changed
  - behavior added
  - commands run
  - how to test
  - follow-up issues

## Coding Conventions

- Use TypeScript and keep components small.
- Prefer simple local state and static data for the first version.
- Keep client-only behavior, such as `localStorage`, hydration safe.
- Use shadcn/ui components where they improve accessibility or consistency.
- Keep Tailwind classes readable and avoid unrelated refactors.

## Data Conventions

- Affix records belong in `src/data/affixes.ts`.
- Each affix must have exactly three examples.
- Use `Greek` or `Latin` for origin.
- Use `prefix`, `suffix`, or `both` for type.
- Display hyphen notation clearly, such as `hemo-`, `-logy`, or `-form-`.

## Design Principles

- Aim for a tasteful classical reference-work feel.
- Use parchment-like neutrals, restrained accents, subtle borders, and readable
  typography.
- Do not over-decorate; accessibility and clarity come first.

## Testing Expectations

Before marking an issue complete, run the relevant checks. At minimum:

```bash
npm run format:check
npm run lint
npm run build
```
