import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components/native'

import theme from 'src/styles/theme'

import 'react-native-gesture-handler/jestSetup'

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Providers
