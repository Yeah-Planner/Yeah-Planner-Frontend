import { render, screen } from '@testing-library/react'
import Header from '../components/Header/Header'

describe('Header', () => {
  beforeEach(() => {
    let isLogin = false
    render(<Header login={isLogin} setLogin={(v: boolean) => (isLogin = v)} />)
  })

  it('renders correctly', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('logo renderd', () => {
    expect(screen.getByText('Yeah-Planner')).toBeInTheDocument()
  })

  it('should be login popup', () => {
    expect(screen.getByText('로그인')).toBeInTheDocument()
  })

  it('toggle to signup popup', () => {
    const button = screen.getByRole('button')
    button.click()
    expect(screen.getByText('회원가입')).toBeInTheDocument()
  })

  it('toggle to login popup', () => {
    const button = screen.getByRole('button')
    button.click()
    button.click()
    expect(screen.getByText('회원가입')).toBeInTheDocument()
  })
})
