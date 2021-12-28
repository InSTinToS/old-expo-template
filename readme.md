change App.tsx directory to inside of src:
  in package.json change main to index.js and create index.js file with registerRootComponent(App)

import aliases: 
  To resolve problem with paths: "../../../"
  I try to use baseUrl of typescript but is not supported by react-native
  I change the file babel.config.js add importAlias and tsconfig.json add paths with all the aliases used