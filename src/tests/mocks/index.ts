//! if change path of this file
//? update "setupFilesAfterEnv" in jest.config.js

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('styled-components', () => {
  const theme = require('src/styles/theme')
  const original = jest.requireActual('styled-components')

  return { ...original, useTheme: () => theme.default }
})
