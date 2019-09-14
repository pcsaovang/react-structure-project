import { connect } from 'react-redux'
import HomeCpn from '../../components/Home'
import { fetchCourses } from './actions'

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCourses: params => dispatch(fetchCourses(params)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeCpn)
