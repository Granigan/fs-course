import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders SimpleBlog', () => {
  const blog = {
    title: 'testing for dummies',
    author: 'dum-dum',
    likes: 5
  }

  const component = render(<SimpleBlog blog={blog} />)

  expect(component.container).toHaveTextContent('testing for dummies')

  component.getByText('testing for dummies dum-dum')

  const div = component.container.querySelector('.simpleblog')
  expect(div).toHaveTextContent('blog has 5 likes')
})
