import React from 'react'

import StackRoutes from './Stack.routes'

import { NavigationContainer } from '@react-navigation/native'

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}

export default Routes
