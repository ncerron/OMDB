import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function Login(props) {
    return (
        <div className="container">
            <div className="input_login mx-auto mt-5">
                <form className="form-group " onSubmit={props.onSubmit}>
                    {props.type == "register" ? <h3 className="text-center">Create Account</h3> : <h3 className="text-center">Login</h3>}
                    {props.user && props.user.message !== "" ? <p className=" mt-3" id="error" style={{ height: "10px" }}>{props.user.message}</p> : null} 
                    <input onBlur={props.handleEmail} onChange={props.handleChangeEmail} className="form-control mt-4" placeholder={"Email address"}></input>
                    {props.emailError !== "" ? <div id="error">{props.emailError}</div> : null}
                    <input onChange={props.handleChangePassword} className="form-control mt-2" placeholder={"Password"}></input>
                    {props.passError !== "" ? <div id="error">{props.passError}</div> : null}
                    {props.type == "register" ? <button className="btn btn-primary mt-2 btn-block" >CREATE ACCOUNT</button>
                        : <button className="btn btn-primary mt-2 btn-block" >LOGIN</button>}
                </form>
                <div className="text-center">
                    {props.type == "register" ?
                        <div><p className="mt-3" style={{ marginBottom: "0px" }}>Already have an account?</p><Link to={{
                            pathname: `/login`,
                            state: { type: "login" }
                        }} ><p >LOGIN</p></Link></div>
                        : <div>
                            <p className="mt-3" style={{ marginBottom: "0px" }}>First time here?</p><Link to={{
                                pathname: `/register`,
                                state: { type: "register" }
                            }} ><p >CREATE ACCOUNT</p></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
