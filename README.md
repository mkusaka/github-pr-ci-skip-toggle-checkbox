# github-pr-ci-skip-toggle-checkbox

A Chrome extension that adds a **CI Skip** toggle button next to the merge button on GitHub Pull Request pages. One click to prepend `[ci skip]` to your merge commit title — no more manual typing.

## Install

- [Chrome Web Store](https://chromewebstore.google.com/detail/github-pr-ci-skip-toggle/joiebgpcoecjpjgmiieofddfkpdfmfij)

## How It Works

1. Navigate to any GitHub Pull Request page.
2. Click a merge strategy (merge, squash, rebase) to open the commit dialog.
3. A **CI Skip** button with a checkbox appears next to the Cancel / Confirm merge buttons.
4. Check the checkbox to prepend `[ci skip]` to the commit title. Uncheck to remove it.

The extension works with all merge strategies and handles GitHub's SPA navigation (Turbo / pjax) automatically.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) v24+
- [pnpm](https://pnpm.io/) v10+

### Setup

```bash
pnpm install
```

### Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Build in watch mode for development |
| `pnpm build` | Production build |
| `pnpm test` | Run tests (watch mode) |
| `pnpm test:run` | Run tests once |
| `pnpm test:coverage` | Run tests with coverage |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm lint` | Lint with oxlint |
| `pnpm format` | Format with Prettier |
| `pnpm package` | Build and create `package.zip` for Chrome Web Store upload |

### Loading the Extension Locally

1. Run `pnpm dev` (or `pnpm build`).
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the `dist/` directory.

### Tech Stack

- **Manifest V3** Chrome Extension (via [@crxjs/vite-plugin](https://github.com/nicedoc/crxjs))
- **Vite** for bundling
- **TypeScript** with strict mode
- **Vitest** + happy-dom for testing
- **oxlint** for linting
- **Prettier** for formatting

### Project Structure

```
src/
  manifest.ts      # Chrome extension manifest definition
  content.ts       # Content script entry point (navigation handling)
  content-logic.ts # Core logic: DOM observation, checkbox injection, [ci skip] toggling
test/
  content.test.ts  # Tests for content logic
  test-setup.ts    # Test environment setup
  test-utils.ts    # Test helpers
```

## Release

Releases are automated via GitHub Actions. Push a version tag to trigger:

```bash
git tag v0.0.5
git push origin v0.0.5
```

This builds the extension, creates a GitHub Release, and attaches the packaged `.zip`.

## License

MIT
