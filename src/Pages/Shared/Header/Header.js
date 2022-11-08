import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/service/service.webp';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => console.error(error));
    }
  
    const menuItems = <>
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
      </li>
      {
          user?.email ?
          <>
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
                <button onClick={handleLogOut} className="nav-link btn btn-outline-danger" aria-current="page">Logout</button>
            </li>
          </>
          :
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/login">Login</Link>
            </li>
      }
      
    </>


    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src={logo} style={{height:'50px',width:'60px'}} alt="Bootstrap" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {menuItems}
                  </ul>
                  
                </div>
    
            </div>
          </nav>
        </div>
      );
};

export default Header;