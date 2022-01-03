import React from 'react'
import { Container, Title } from './styles'

import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <Container>
      <StatusBar style='light' />

      <Title>Populares</Title>
    </Container>
  )
}

export default Home
