## Electron-React-Electron-cgi-Dotnet

```
$ git clone https://github.com/Chitova263/electron-react-electron-cgi.git && cd electron-react-electron-cgi.git
```
- Build Desktop App
```
$ npm run build:react
$ npm run build
$ npm run start
$ npm run package-win or  npm run package-mac
```

- Dotnet Core Console App
```
$ cd core/Core && dotnet publish -Release
```
- Copy dotnet Release folder to release-builds\electron-demo-win32-ia32 run electron executable
