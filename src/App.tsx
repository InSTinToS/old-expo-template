import AppLoading from 'expo-app-loading'
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto'

import Home from 'pages/Home'

import theme from 'styles/theme'

import { ThemeProvider } from 'styled-components/native'

const App = () => {
  const [fonts] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fonts) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
