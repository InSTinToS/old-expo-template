import React from 'react'

import Home from 'src/pages/Home'
import SecondPage from 'src/pages/SecondPage'

import { ParamListBase } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export interface HomeStackParams extends ParamListBase {
  Home: undefined
  SecondPage: { env: string }
}

const Stack = createStackNavigator<HomeStackParams>()

const StackRoutes = () => (
  <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{ headerShown: false, animationEnabled: false }}
  >
    <Stack.Screen component={Home} name='Home' />
    <Stack.Screen component={SecondPage} name='SecondPage' />
  </Stack.Navigator>
)

export default StackRoutes
