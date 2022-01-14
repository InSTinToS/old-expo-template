import React from 'react'

import Providers from './mocks/Providers'
import Navigator from './mocks/Navigator'

import SecondPage from 'src/pages/SecondPage'

import { cleanup, render } from '@testing-library/react-native'

describe('SecondPage', () => {
  afterEach(cleanup)

  it('Should be able to use .env variables (by mocked params)', () => {
    const { getByTestId } = render(
      <Navigator component={SecondPage} params={{ env: 'TEST OF DOTENV' }} />,
      { wrapper: Providers }
    )

    const dotenv = getByTestId('dotenv')
    const dotenvText = dotenv.children.toString().replace(',', '')

    expect(dotenvText).toEqual(
      'Env typed and received by params TEST OF DOTENV'
    )
  })
})
