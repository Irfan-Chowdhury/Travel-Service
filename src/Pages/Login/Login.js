import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import login from '../../assets/images/login/login.svg';
import login from '../../assets/login/login.webp'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const {logIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form     = event.target;
        const email    = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset(); 
        })
        .catch(error => {
            console.error(error);
        });
    }



    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-light">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <img src={login} alt="" />
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form onSubmit={handleLogin} className="p-4 p-md-5 border rounded-3 bg-light">
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