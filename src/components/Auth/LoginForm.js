import React, { useEffect } from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

const Formwrap = styled.div`
`

function LoginForm(props) {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    authError,
    setErrors,
    errors,
    isValid,
  } = props
  const err = get(authError, 'response.data.message')

  useEffect(() => {
    if (err) {
      setErrors({ loginError: err })
    }
  }, [err, setErrors])

  return (
    <form onSubmit={handleSubmit} id="login">
      <Formwrap>
        <h1>Login</h1>
        <p className="text-muted">Sign in to your account</p>
        {errors.loginError && <p>{errors.loginError}</p>}
        <input
          id="email"
          type="email"
          placeholder="Email"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        <button
          color="primary"
          className="px-4"
          type="submit"
          disabled={!isValid}>
          Login
        </button>
      </Formwrap>
    </form>
  )
}

export default LoginForm
