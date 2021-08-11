# Dominion Card Manager

[![GitHub License](https://img.shields.io/github/license/wesbuck/DominionCardManager?logo=open-source-initiative)](https://opensource.org/licenses/MIT)
[![GitHub top language](https://img.shields.io/github/languages/top/wesbuck/DominionCardManager?logo=vue.js)](https://github.com/wesbuck/DominionCardManager/search?l=vue)
[![GitHub Build Status](https://github.com/wesbuck/DominionCardManager/actions/workflows/node.js.yml/badge.svg)](https://github.com/wesbuck/DominionCardManager/actions)

Current features provided by this app:
 * View [cards from any expansion](https://dominion-card-manager.herokuapp.com/#/expansion/Dominion/), as well as base and promo cards
 * Get a [set of 10 cards](https://dominion-card-manager.herokuapp.com/#/CardSet/), with the ability to replace individual cards
 * Get a [random card](https://dominion-card-manager.herokuapp.com/#/Random/)
 * Filter a [list of cards](https://dominion-card-manager.herokuapp.com/#/List/) by choosing Set, Cost, and Type
 * [Search card](https://dominion-card-manager.herokuapp.com/#/Search/) name, text, cost, type, or all of the above for an inputted string

This app is built with Vue, SASS, Bootstrap, and more. Data is intended to be provided by [DominionCardAPI](https://github.com/wesbuck/DominionCardAPI/).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Maintenance

### Check for outdated packages
Run `npm outdated` to check which packages have new major versions that need to be updated.

### Update all packages
To update all packages to a new major version, install the npm-check-updates package globally:
```bash
npm install -g npm-check-updates
```
then run it:
```bash
ncu -u
```
This will upgrade all the version hints in `package.json` so npm can install the new major version. 

You are now ready to `npm update` (or `npm install` if not already installed) to fetch the latest files and update `package-lock.json`.

Ensure everything works before pushing the changes.
