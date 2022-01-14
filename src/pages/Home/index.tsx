import React from 'react'
import { Container, Title } from './styles'
import { Button } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { TEST } from '@env'
import { StackScreenProps } from '@react-navigation/stack'
import { HomeStackParams } from 'src/routes/Stack.routes'
import { useTheme } from 'styled-components'

type RouteScreenProps = StackScreenProps<HomeStackParams, 'Home'>

interface Props extends RouteScreenProps {}

const Home = ({ navigation }: Props) => {
  const theme = useTheme()

  const handleSecondPage = () => {
    navigation.navigate('SecondPage', { env: TEST })
  }

  return (
    <Container style={{ borderColor: theme.colors.primary }}>
      <StatusBar style='light' />

      <Title>Hello React-Native</Title>
      <Title testID='dotenv'>Dotenv Test: {TEST}</Title>

      <Button title='Second Page' onPress={handleSecondPage} />
    </Container>
  )
}

export default Home
