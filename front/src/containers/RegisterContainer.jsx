import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import {registerUser, searchUserRegister} from '../redux/actions/user'
import Swal from "sweetalert2";

class RegisterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            email: "",
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
            this.setState({ emailError: "Ingrese un mail válido" })
        } else {
            this.setState({ emailError: "" })
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
        if (this.state.email != "" && this.state.emailError == "") {
            this.setState({ emailError: "" })
            if (this.state.password != "") {
                this.setState({ passError: "" })
                this.props.search_user(this.state.email).then(() => {
                    //verifica que no se vuelva a registrar un usuario
                    if (!this.props.searchResult.length > 0) {
                        this.props.register(this.state).then(() => {
                            Swal.fire({
                                title: "",
                                text: "Thanks for signing up!",
                                width: 200,
                                confirmButtonColor: "#4b3558de",
                                confirmButtonText: "Ok"
                            })
                            this.props.history.push('/login');
                        })
                    } else {
                        Swal.fire({
                            title: "",
                            icon: 'warning',
                            text: "A user with the specified email already exisits",
                            width: 200,
                            confirmButtonColor: "#4b3558de",
                            confirmButtonText: "Ok"
                        })
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
            <Login type={"register"}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePassword={this.handleChangePassword}
                handleEmail={this.handleEmail}
                emailError={this.state.emailError}
                passError={this.state.passError}
                onSubmit={this.onSubmit}
            >
                </Login>
        )
    }
}

const mapStateToProps = (state) => ({
    searchResult: state.search
  })

const mapDispachToProps = () => dispatch => ({
    register: value => dispatch(registerUser(value)),
    search_user: value => dispatch(searchUserRegister(value)),
})

export default connect(mapStateToProps, mapDispachToProps)(RegisterContainer)