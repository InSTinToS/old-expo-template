# Expo Template

* Change App.tsx directory to inside of src:
  * In package.json, I've change main to index.js and create index.js file with registerRootComponent(App)

* Styled-components
  * Add new folder called @types to declare DefaultTheme type associated at theme inside folder styles

* Dotenv
  * yarn add react-native-dotenv
  * add env.d.ts inside @types <b>with all env variables typed</b>
  * ```import { ENV_VARIABLE } from @env```
  * maybe run: ```expo r -c``` (to clear cache)