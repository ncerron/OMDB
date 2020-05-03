import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from "../redux/actions/user";
import Login from "../components/Login"

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      pass: "",
      emailError: "",
      passError: ""
    };
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail() {
    const valid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!valid.test(this.state.email)) {
      this.setState({ emailError: "Please enter a valid email address" })
    } else {
      this.setState({ emailError: "" })
    }
  }

  handleChangePassword(e) {
    this.setState({
      pass: e.target.value
    })
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  //lala@lala.com
  onSubmit(e) {
    e.preventDefault()
    if (this.state.email != "") {
      this.setState({ emailError: "" })
      if (this.state.pass != "") {
        this.setState({ passError: "" })
        this.props.logIn(this.state).then(() => {
          if (!this.props.user.message) {
            this.props.history.push('/movies')
          }
        })
      } else {
        this.setState({ passError: "Password is required" })
      }
    } else {
      this.setState({ emailError: "Email address is required" })
    }
  }

  render() {
    return (
      <Login
        handleChangeEmail={this.handleChangeEmail}
        handleChangePassword={this.handleChangePassword}
        handleEmail={this.handleEmail}
        emailError={this.state.emailError}
        onSubmit={this.onSubmit}
        user={this.props.user}
        passError={this.state.passError}
      >
      </Login>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispachToProps = () => dispatch => ({
  logIn: value => dispatch(logIn(value)),
})

export default connect(mapStateToProps, mapDispachToProps)(LoginContainer)