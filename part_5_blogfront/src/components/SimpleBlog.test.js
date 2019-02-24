import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

describe('SimpleBlog', () => {
  test('renders', () => {
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

  test('like button works twice', () => {
    const blog = {
      title: 'testing for dummies',
      author: 'dum-dum',
      likes: 5
    }

    const mockHandler = jest.fn()

    const component = render(<SimpleBlog blog={blog} onClick={mockHandler} />)

    const button = component.container.querySelector('.likeButton')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})
