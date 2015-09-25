# Windows setup

Unfortunately the nvm-windows package does not play nicely with the BT laptops. Let's try to use [cmder](https://github.com/cmderdev/cmder) to do development.

## Install cmder

1. Download the latest release of cmder [cmder](https://github.com/cmderdev/releases)
2. Extract to your Program Files directory (or wherever you want)
3. Run

### Missing api-ms-win-crt-runtime-l1-1-0.dll

See [here](https://github.com/cmderdev/cmder/issues/490)

1. Download [Visual C++ Redistributable](http://download.microsoft.com/download/9/3/F/93FCF1E7-E6A4-478B-96E7-D4B285925B00/vc_redist.x64.exe)
2. Install
3. `GOTO` Install cmder step 3.