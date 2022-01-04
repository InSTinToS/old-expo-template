import React from 'react'
import { Container, Title } from './styles'

import { StatusBar } from 'expo-status-bar'

import { TEST } from '@env'

const Home = () => {
  return (
    <Container>
      <StatusBar style='light' />

      <Title>Hello React-Native</Title>
      <Title>Dotenv Test: {TEST}</Title>
    </Container>
  )
}

export default Home
