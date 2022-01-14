import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

interface Props {
  component: any
  params?: any
}

const Navigator = ({ component, params = {} }: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='MockedScreen'
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
