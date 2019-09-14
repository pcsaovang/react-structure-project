import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import LoginCpn from '../../components/Auth/Login'
import { login } from './actions'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: ({ email, password }) => {
      return dispatch(login({ email, password }))
    },
    goHome: () => dispatch(push('/'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginCpn)
