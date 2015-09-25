# Setup

## OS X/Linux

0. Install [nvm](https://github.com/creationix/nvm)
1. Install and use the right version of node
   * `nvm install v0.12.7`
   * `nvm use 0.12.7`
2. Install broccoli CLI
   * `npm i -g broccoli-cli`
3. Clone this repo
4. Open command prompt and navigate to repo directory
5. Install/update the node_modules
   * `npm i`

## Windows

0. Install [nvm-windows](https://github.com/coreybutler/nvm-windows); The installer will detect the installed nodejs version @  'c:\Development\dev-tools\ui\nodejs' and will create a symlink in this folder so that 'nvm' can manage also the version we already use for 'nextgen-ip-ui'; All the nodejs versions will be installed by 'nvm' @  'c:\Users\<username>\AppData\Roaming\nvm' 
1. Open "cmd" -> "Run as Administrator"
2. Configure proxy for nvm: 
  * `nvm proxy "http://<your proxy host>:<proxy port>"`
3. Install and use the right version of node (never use the 'v' prefix for specifying the nodejs version). If you get a message like 'Node.js vx.y.z is only available in 32-bit.' then try 'nvm install x.y.z. 32' (by default nvm will try to match the arch of your OS which is 64)
   * `nvm install 0.12.7`
   * `nvm use 0.12.7`

Other options for windows:

* Install node manually from [nodejs.org](http://nodejs.org/dist/) but you need to play with the PATH to switch between node versions OR
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
