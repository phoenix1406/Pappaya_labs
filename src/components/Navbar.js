import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <>
   <nav className="navbar navbar-expand-lg" >
  <div className="container-fluid">
   <img src="	https://admin.editfromindia.anujdwivedi.in/storage/settings/logo-63d78c0345985.png" style={{height:'130px'}} alt="..." srcset="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/portfolio'?'active':''}`}to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#photoEditing" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className={`dropdown-item ${location.pathname==='#photoEditing'?'active':''}`} to="#photoEditing">PhotoEditing</Link></li>
            <li><Link className={`dropdown-item ${location.pathname==='#videoEditing'?'active':''}`} to="#videoEditing">Video Editing</Link></li>
       
            <li><Link className={`dropdown-item ${location.pathname==='#albumDesigning'?'active':''}`}to="#albumDesigning">Album Designing</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className= {`nav-link ${location.pathname==='/blogs'?'active':''}`}to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about'?'active':''}`} to="/about">About</Link>
        </li>
      
      </ul>
      <form className="d-flex" role="search" >
     
        <Link type = "button" className="btn btn-outline-success mx-1" to = "/login" style={{fontWeight:'bold',color:'black'}}>SignIn</Link>
        <Link className="btn btn-outline-danger mx-1" type="button" to ="/register" style={{fontWeight:'bold'}}>Register</Link>
      </form>
    </div>
  </div>
</nav>
      </>
  )
}
export default Navbar;
