# Voxial

Voxial is an educational web app for common Greek and Latin affixes:
prefixes, suffixes, and affixes that can appear in both positions.

The first version uses local static data and client-side persistence so the
app stays simple while the product shape is established.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- npm
- ESLint
- Prettier

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run format:check
```

## Current Structure

- `src/app` contains App Router routes and global styles.
- `src/components/ui` contains shadcn/ui primitives.
- `src/lib` contains shared utilities.
- `src/data/affixes.ts` will contain the local typed affix dataset.

## Data Model

Affix data starts as local TypeScript records. Each affix should include:

- `id`
- `text`
- `displayText`
- `origin`: `Greek` or `Latin`
- `type`: `prefix`, `suffix`, or `both`
- `meaning`
- `examples`: exactly three entries with `word` and `explanation`

The local data shape should stay easy to replace later with an API, database,
or account-backed source.

## Linear Workflow

Voxial uses a Linear-first workflow. Work must happen from Linear issues in the
`Voxial` project and `Voxial` team.

- Work one issue at a time.
- Move the active issue to `In Progress`.
- Reference the Linear issue in commits and summaries where practical.
- After finishing an issue, update Linear with files changed, behavior added,
  commands run, how to test, and follow-up issues.

## GitHub Workflow

The only GitHub repository in scope is `https://github.com/Zanny7/Voxial.git`.

Use `dev` as the working branch for now. Promote from `dev` to `main` only at
explicit checkpoints.

Before changing files, confirm:

```bash
git remote -v
git branch --show-current
git status --short --branch
```
