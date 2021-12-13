import Home from '../pages'
import { render, screen } from '@testing-library/react'

describe('root path', () => {
  it('should render correctly', () => {
    render(<Home />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
