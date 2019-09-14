import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import { APP_CLASS } from '../../config/app'

const mapStateToProps = state => {
  return {
    breakpoint: state.layout.breakpoint,
    auth: state.auth,
    responsive: APP_CLASS
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout)
