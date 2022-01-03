import AppLoading from 'expo-app-loading'
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components/native'

import Home from 'src/pages/Home'

import theme from 'src/styles/theme'

const App = () => {
  const [fonts] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fonts) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
