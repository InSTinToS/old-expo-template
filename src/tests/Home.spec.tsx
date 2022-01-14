import React from 'react'

import Providers from './mocks/Providers'
import Navigator from './mocks/Navigator'

import Home from 'src/pages/Home'

import { cleanup, render } from '@testing-library/react-native'

describe('Home', () => {
  afterEach(cleanup)

  it('Should be able to use .env variables', () => {
    const { getByTestId } = render(<Navigator component={Home} />, {
      wrapper: Providers
    })

    const dotenv = getByTestId('dotenv')
    const dotenvText = dotenv.children.toString().replace(',', '')

    expect(dotenvText).toEqual('Dotenv Test: TEST OF DOTENV')
  })
})
