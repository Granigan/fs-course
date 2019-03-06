import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from 'react-testing-library'
import Blog from './Blog'

afterEach(cleanup)

describe('Blog', () => {
  const blog = {
    title: 'testing for dummies',
    author: 'dum-dum',
    url: 'intranet',
    likes: 5,
    user: {
      id: 'vebab',
      name: 'tru owner',
      username: 'owner'
    }
  }

  const owner = {
    id: 'vebab',
    username: 'owner'
  }

  test('renders only name and author by default', () => {
    const component = render(<Blog blog={blog} user={owner} />)
    expect(component.container).toHaveTextContent(
      'testing for dummies by dum-dum'
    )
    const full = component.container.querySelector('.fullDetails')
    expect(full).toHaveStyle('display: none')
    const brief = component.container.querySelector('.briefDetails')
    expect(brief).toHaveStyle('display: ')
  })

  test('renders full details after click', () => {
    const component = render(<Blog blog={blog} user={owner} />)
    const button = component.container.querySelector('.toggler')
    fireEvent.click(button)
    expect(component.container).toHaveTextContent(
      'testing for dummies by dum-dum'
    )
    expect(component.container).toHaveTextContent('intranet')
    expect(component.container).toHaveTextContent('tru owner')
    const full = component.container.querySelector('.fullDetails')
    expect(full).toHaveStyle('display: ')
    const brief = component.container.querySelector('.briefDetails')
    expect(brief).toHaveStyle('display: none')
  })
})
