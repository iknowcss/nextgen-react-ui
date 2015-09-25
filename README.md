# Setup

## OS X/Linux

0. Install [nvm](https://github.com/creationix/nvm)
1. Install and use the right version of node
   * `nvm install v0.12.7`
   * `nvm use 0.12`
2. Install broccoli CLI
   * `npm i -g broccoli-cli`
3. Clone this repo
4. Open command prompt and navigate to repo directory
5. Install/update the node_modules
   * `npm i`

## Windows

Windows doesn't have nvm which makes managing multiple versions of node unpleasant. Do one of the following:

* Install node manually from [nodejs.org](http://nodejs.org/dist/)
* Try and get [nvm-windows](https://github.com/coreybutler/nvm-windows) working (tip: don't bother)
* Don't use Windows; download [VirtualBox](https://www.virtualbox.org/), install [Linux Mint](http://www.linuxmint.com/download.php), breathe a sigh of relief

# Build tasks

Run from `nextgen-react-ui/` the project directory

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
