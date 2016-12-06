import React, { Component } from 'react';
import './css/Login.css';
import AppLogo from '../logos/Logo.png';

class Login extends Component{
  render(){
    return (
      <div className="container">
                <div className="row vertical-offset-100">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="row-fluid user-row">
                                    <img src={AppLogo} class="img-responsive" alt="Conxole Admin"/>
                                </div>
                            </div>
                            <div className="panel-body">
                                <form accept-charset="UTF-8" role="form" className="form-signin">
                                    <fieldset>
                                        <label className="panel-login">
                                            <div className="login_result"></div>
                                        </label>
                                        <input className="form-control" placeholder="Username" id="username" type="text" />
                                        <input className="form-control" placeholder="Password" id="password" type="password" />
                                        <br></br>
                                        <input className="btn btn-lg btn-success btn-block" type="submit" id="login" value="Login »" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default Login;
