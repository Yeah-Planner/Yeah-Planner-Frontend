import { render, screen } from '@testing-library/react'
import LoginContent from '../components/Header/LoginContent'

describe('Log in', () => {
  beforeEach(() => {
    render(<LoginContent setIsLogin={v => {}} />)
  })

  it('should render', () => {
    expect(screen.getAllByText('로그인')[0]).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument()
  })
})
