# github-pr-ci-skip-toggle-checkbox

Chrome extension that adds checkbox near to PR merge button for easy adds [ci skip] comment to merge title.

## Features

- Adds a checkbox near the PR merge button to toggle [ci skip] in the merge commit title
- Works on all GitHub pull request pages
- Preserves existing commit message while toggling the [ci skip] prefix

## Installation

- [Chrome Web Store](https://chrome.google.com/webstore/detail/github-pr-ci-skip-toggle-checkbox/)

## Development

```bash
# Install dependencies
pnpm install

# Development build with watch
pnpm dev

# Production build
pnpm build

# Run tests
pnpm test

# Package for Chrome Web Store
pnpm package
```

## License

MIT