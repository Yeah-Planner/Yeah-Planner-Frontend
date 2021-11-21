import { render, screen } from '@testing-library/react'
import SignUpContent from '../components/Header/SignUpContent'

describe('Sign Up', () => {
  beforeEach(() => {
    render(<SignUpContent setIsLogin={(v: boolean) => {}} />)
  })

  it('should render', () => {
    expect(screen.getAllByText('회원가입')[0]).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '회원가입' })).toBeInTheDocument()
  })

  // it('should email validation work', async () => {
  //   const input = await screen.findByPlaceholderText<HTMLInputElement>('이메일')
  //   input.onchange = (e) => {
  //     this.
  //   }
  //   //  = 'good@gmail.com'
  //   screen.getByRole('button', { name: '회원가입' }).click()
  //   expect(screen.getByText('유효하지 않은 이메일입니다.')).toBeInTheDocument()
  // })

  // it('should username validation work', async () => {
  //   ;(await screen.findByPlaceholderText<HTMLInputElement>('이메일')).value =
  //     'good123@email.com'
  //   ;(await screen.findByPlaceholderText('비밀번호')).innerText = 'goodpw123##'
  //   ;(await screen.findByPlaceholderText('비밀번호 확인')).innerText =
  //     'goodpw123##'
  //   const input = await screen.findByPlaceholderText('이름')
  //   input.innerText = '1234567890123456789012345678901234567890'
  //   screen.getByRole('button', { name: '회원가입' }).click()
  //   expect(screen.getByText('이름은 20자 이하여야합니다.')).toBeInTheDocument()
  // })

  // it('should password validation work', async () => {
  //   ;(await screen.findByPlaceholderText('이메일')).innerText = 'good@email.com'
  //   const input = await screen.findByPlaceholderText('비밀번호')
  //   input.innerText = '123'
  //   screen.getByRole('button', { name: '회원가입' }).click()
  //   expect(
  //     screen.getByText(
  //       '비밀번호는 특수문자, 알파벳으로 8자리 이상이어야합니다.'
  //     )
  //   ).toBeInTheDocument()
  // })

  // it('should password confirm validation work', async () => {
  //   ;(await screen.findByPlaceholderText('이메일')).innerText =
  //     'good123@email.com'
  //   const pw = await screen.findByPlaceholderText('비밀번호')
  //   const pwConfirm = await screen.findByPlaceholderText('비밀번호 확인')
  //   pw.innerText = 'testpassword123**'
  //   pwConfirm.innerText = 'testpassword123**sdf'
  //   screen.getByRole('button', { name: '회원가입' }).click()
  //   expect(
  //     screen.getByText('비밀번호가 일치하지 않습니다.')
  //   ).toBeInTheDocument()
  // })
})
