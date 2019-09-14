import React, { Component } from 'react'
import styled from 'styled-components'
import LoginForm from '../../containers/Auth/LoginForm'

const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
`

class Login extends Component {
  componentDidMount() {
    const { auth, goHome } = this.props
    if (auth.isAuthenticated && auth.token) {
      goHome()
    }
  }

  render() {
    const { auth, handleLogin } = this.props

    return (
      <LoginWrap>
        <LoginForm handleLogin={handleLogin} authError={auth.error} />
      </LoginWrap>
    )
  }
}

export default Login
