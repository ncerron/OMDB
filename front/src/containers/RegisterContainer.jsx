import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'


class RegisterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            email: "",
            error: "",

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
            password: e.target.value
        })
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.history.push('/login');
    }

    render() {
        return (
            <Login type={"register"}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePassword={this.handleChangePassword}
                handleEmail={this.handleEmail}
                error={this.state.error}
            >
            ></Login>
        )
    }
}
export default connect(null, null)(RegisterContainer)