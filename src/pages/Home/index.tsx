import React from 'react'
import { Avatar, Container, Title } from './styles'
import { Button } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import avatar from 'static/avatar.png'

const Home = () => {
  return (
    <Container>
      <StatusBar style="light" />

      <Title>Home</Title>

      <Avatar source={avatar} />
    </Container>
  );
};

export default Home;
