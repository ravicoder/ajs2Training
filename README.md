# ajs2Training
angular 2 training

JS:
- core JS has es2015 functions, useful since most browsers today still support only es5
- "Hoisting" in JS: all variable declarations move to top (hence doesn't matter where they are declared in code)
- Two var scopes in JS: global, function
- Only way to scope a var in JS is to declare that in a function

NOTES:
npm install typescript -g

npm install lite-server -g

npm install systemjs

-- download jquery type definitions
npm install @types/jquery



note: -g installs globally, typically used when installing node modules

module formatter (ex: amd, commonjs) & module loader (ex: systemjs) are used to create modules in JavaScript

component <=> tag
directive <=> attribute
services make dependency injection possible




https://www.codeproject.com/Articles/1198279/Learn-Angular-in-days-Day-Part

File level - typescript module
Module inside file - angular module



Q:
- how are version upgrades easily managed in package.json
- Refactoring support (say we want to move files around, existing imports will be impacted)
- central repo for node packages supported instead of folder level packages


Checkout:
- CSS sprite (optimize image downloads)
- Polyfill
- Gulp & Grunt (task runners)
- Webpack (module bundler)
- MEAN stack
- node module concurrently
- Using node as a task runner by configuring package.json
- 

Architecture:
- Best architecture is easy architecture
- Do not make it complicated :)
