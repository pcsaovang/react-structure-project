import { connect } from 'react-redux'
import Layout from '../../components/Layout'

const mapStateToProps = state => {
  return {
    breakpoint: state.layout.breakpoint,
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout)
