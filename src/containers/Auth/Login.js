import { connect } from 'react-redux'
import LoginCpn from '../../components/Auth/Login'

const mapStateToProps = state => {
  return {
    breakpoint: state.layout.breakpoint,
  }
}

export default connect(mapStateToProps)(LoginCpn)
