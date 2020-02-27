import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <div className="container">
            { history.state == null?<h1 className="text-center mt-3" style={{ color:"#af9abbde"}}>Welcome</h1>:  history.state.state == null && props.type !== "register"? <h1 className="text-center mt-3" style={{ color:"#af9abbde"}}>Welcome</h1>:null}
            <div className="input_login mx-auto mt-5">
                <form className="form-group "  onSubmit={props.onSubmit}>
                    {props.type == "register" ? <h3 className="text-center">Create Account</h3> : <h3 className="text-center">Login</h3>}
                    <input onBlur={props.handleEmail} onChange={props.handleChangeEmail} className="form-control mt-4" placeholder={"Email address"}></input>
                    {props.error !== "" ? <div id="error">{props.error}</div> : null}

                    <input onChange={props.handleChangePassword} className="form-control mt-2" placeholder={"Password"}></input>
                    {props.type == "register" ? <button className="btn btn-primary mt-2 btn-block" >CREATE ACCOUNT</button>
                        : <button  className="btn btn-primary mt-2 btn-block" >LOGIN</button>}
                </form>
                <div className="text-center">
                    {props.type == "register" ?
                        <div><p className="mt-3" style={{ marginBottom: "0px" }}>Already have an account?</p><Link to={{
                            pathname: `/`,
                            state: { type: "login" }
                          }} ><p >LOGIN</p></Link></div>
                        : <div>
                            <p className="mt-3" style={{ marginBottom: "0px" }}>First time here?</p><Link to={{
                    pathname: `/register`,
                    state: null
                  }} ><p >CREATE ACCOUNT</p></Link>
                        </div>
                    }
                </div>
               
            </div>
        </div>
    )
}
