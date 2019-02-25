import React from 'react'
import { act, render, waitForElement } from 'react-testing-library'
import App from './App'
jest.mock('./services/blogs')

describe('App ', () => {
  test('if no user is logged, no blogs are rendered', async () => {
    const component = render(<App />)
    component.rerender(<App />)

    await waitForElement(() => component.getByText('Please log in.'))

    expect(component.container).not.toHaveTextContent('React patterns')
  })

  test('when logged in, blogs are rendered', async () => {
    const user = {
      username: 'owner',
      name: 'tru owner',
      token: '5c696987f11790573e0e4b1b'
    }

    localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
    const component = render(<App />)
    component.rerender(<App />)

    await waitForElement(() => component.getByText('Logged in as tru owner'))

    expect(component.container).toHaveTextContent('React patterns')
  })
})
