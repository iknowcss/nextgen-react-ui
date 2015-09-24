# Setup

1. Clone the repo
2. Install/use the right version of node
    * `nvm install v0.12.7`
    * `nvm use 0.12`
    * 
In windows7 I get: C:\Development\nextgen>nvm install v0.12.7
C:\Users\M040398\.nvm\node-vv0.12.7 doesn't exist, (need to downloaded first?) v0.12.7

Which 'nvm' ?
    * https://www.npmjs.com/package/nvm => https://github.com/brianloveswords/nvm
    * https://github.com/creationix/nvm
    * https://github.com/coreybutler/nvm-windows
    
3. Install/update the node_modules
    * `npm i`
4. Install broccoli CLI
    * `npm i -g broccoli-cli`

# Build tasks

## Run tests (watch)

`npm run tdd`

## Run tests (no watch)

**TODO**

## Develop

Builds the WebPack, serves using broccoli development server

`broccoli serve`

**Note** takes a bit to get started, refreshes very quickly on changes

Open http://localhost:4200 to view the dev server

## Build

**TODO**
