# Know more about standard-version

https://www.conventionalcommits.org/en/v1.0.0/

## Add in `package.json`

```json
"standard-version": {
    "types": [
      {
        "type": "feat",
        "section": "Features"
      },
      {
        "type": "fix",
        "section": "Bug Fixes"
      },
      {
        "type": "docs",
        "section": "Documentation"
      },
      {
        "type": "style",
        "section": "Styling"
      },
      {
        "type": "refactor",
        "section": "Refactors"
      },
      {
        "type": "perf",
        "section": "Performance"
      },
      {
        "type": "test",
        "section": "Tests"
      },
      {
        "type": "build",
        "section": "Build System"
      },
      {
        "type": "ci",
        "section": "CI"
      },
      {
        "type": "chore",
        "section": "Chore"
      },
      {
        "type": "revert",
        "section": "Reverts"
      }
    ]
  },
```

## Install

```bash
npm install -D standard-version
```

## Usage

### FEATURE

use `feat` as keyword for adding `feature`

Example:

```bash
git add .
git commit -m "feat: The feature you add goes here"
```

### Fix

use `fix` as keyword for adding `code fixing`

Example

```bash
git add .
git commit -m "fix: The fix you made goes here"
```

### DOCUMENTATION

use `docs` as keyword for adding `documentation`

Example

```bash
git add .
git commit -m "docs: The documentation you made goes here"
```

### STYLING

use `style` as keyword for adding `styling`

Example

```bash
git add .
git commit -m "style: The styles you made goes here"
```

### REFACTOR CODE

use `refactor` as keyword for adding `Refactored code`

Example

```bash
git add .
git commit -m "refactor: The Refactored code goes here"
```

### PERFORMANCE

use `perf` as keyword for adding `Performance Enhancements`

Example

```bash
git add .
git commit -m "perf: The Performance improved details goes here"
```

### TEST

use `test` as keyword for adding `Test`

Example

```bash
git add .
git commit -m "test: The Tests added in the file goes here"
```

### BUILD SYSTEM

use `build` as keyword for adding `Buils Systems`

Example

```bash
git add .
git commit -m "build: The built code goes here"
```

### CONTINUOUS INTEGRATION

use `ci` as keyword for adding `CONTINUOUS INTEGRATION`

Example

```bash
git add .
git commit -m "ci: The CI goes here"
```

### CHORE

use `chore` as keyword for adding `Chore`

Example

```bash
git add .
git commit -m "chore: The chore goes here"
```

### REVERT

use `revert` as keyword for adding `Reverts`

Example

```bash
git add .
git commit -m "revert: The revert log you made goes here"
```

# ADDING MANUALLY

### IN `package.json`

Add

```json
"standard-version": {
    "types": [
      {
        "type": "manual",
        "section": "manual"
      },
    ]
}
```

## For BitBucket

In package.json `"scripts":`
Change

```json
"scripts": {
  "prerelease": "standard-version --prerelease",
  "release": "standard-version",
  "major": "standard-version --release-as major",
  "minor": "standard-version --release-as minor",
  "patch": "standard-version  --release-as patch"
},
```

To

```json
"scripts": {
  "prerelease": "standard-version --commitUrlFormat {{host}}/{{owner}}/{{repository}}/commits/{{hash}} --prerelease",
  "release": "standard-version --commitUrlFormat {{host}}/{{owner}}/{{repository}}/commits/{{hash}}",
  "major": "standard-version --commitUrlFormat {{host}}/{{owner}}/{{repository}}/commits/{{hash}} --release-as major",
  "minor": "standard-version --commitUrlFormat {{host}}/{{owner}}/{{repository}}/commits/{{hash}} --release-as minor",
  "patch": "standard-version --commitUrlFormat {{host}}/{{owner}}/{{repository}}/commits/{{hash}} --release-as patch"
},
```

For more help run

```bash
standard-version --help
```
