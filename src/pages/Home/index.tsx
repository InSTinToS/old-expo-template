import React from 'react'
import { Container, Title } from './styles'

import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <Container>
      <StatusBar style='light' />

      <Title>Home</Title>
    </Container>
  )
}

export default Home
