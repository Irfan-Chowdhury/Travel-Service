import React from 'react';
import { Link } from 'react-router-dom';
// import login from '../../assets/images/login/login.svg';
import login from '../../assets/login/login.webp'
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    
    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-light">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <img src={login} alt="" />
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-light">
                        <h3 className='text-center mb-5'>Login</h3>

                        <div className="form-floating mb-3">
                            <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">LOGIN</button>
                        <hr className="my-4" />
                        <small className="text-muted">New to Genius Car ? Please <Link to='/signup'>Sign Up</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;