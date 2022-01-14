import React from 'react'
import { Container } from './styles'
import { Button } from 'react-native'

import { Title } from '../Home/styles'

import { StackScreenProps } from '@react-navigation/stack'
import { HomeStackParams } from 'src/routes/Stack.routes'

type RouteScreenProps = StackScreenProps<HomeStackParams, 'SecondPage'>

interface Props extends RouteScreenProps {}

const SecondPage = ({ navigation, route }: Props) => {
  const { env } = route.params

  const handleHome = () => {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Title>SecondPage</Title>

      <Title testID='dotenv'>Env typed and received by params {env}</Title>

      <Button title='Home' onPress={handleHome} />
    </Container>
  )
}

export default SecondPage
