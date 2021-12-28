# Expo Template

* Change App.tsx directory to inside of src:
  * In package.json, I've change main to index.js and create index.js file with registerRootComponent(App)

* import aliases (To resolve problem with paths: "../../../"):
  * I try to use baseUrl of typescript but is not supported by react-native
  * I change the file babel.config.js adding importAlias and tsconfig.json paths with all the aliases used
  * yarn start -c to start and clear cache

* Styled-components
  * Add new folder called @types to declare DefaultTheme type associated at theme inside folder styles