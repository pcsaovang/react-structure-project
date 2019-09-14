import { withFormik } from 'formik'
import LoginForm from '../../components/Auth/LoginForm'

export default withFormik({
  displayName: 'login',
  mapPropsToValues: () => ({
    email: 'tranphong.dev@gmail.com',
    password: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const { handleLogin } = props
    handleLogin(values)
    setSubmitting(false)
  },
})(LoginForm)
