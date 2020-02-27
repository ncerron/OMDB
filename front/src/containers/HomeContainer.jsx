import React, { Component } from 'react'
import {connect} from 'react-redux'
import Home from '../components/Home'
import {loginUser} from "../redux/actions/user";

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pass: "",
      email: "",
      error: ""
    
    };
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail() {
    const valid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!valid.test(this.state.email)) {
      this.setState({ error: "Ingrese un mail válido" })
    } else {
      this.setState({ error: "" })
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


  onSubmit(e) {
    e.preventDefault()
    this.props.receiveUser(this.state)
   // this.props.history.push('/movies'); 

  }
  render() {
    return (
      <Home
        handleChangeEmail={this.handleChangeEmail}
        handleChangePassword={this.handleChangePassword}
        handleEmail={this.handleEmail}
        error={this.state.error}
        onSubmit={this.onSubmit}
      >
      </Home>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispachToProps = dispatch => {
  return {
    receiveUser: value => {
      dispatch(loginUser(value))
    }
  }
}


export default connect(mapStateToProps, mapDispachToProps)(HomeContainer)