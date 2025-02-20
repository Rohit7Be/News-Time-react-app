import React from "react";


const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-vector-news-icon-button-news-logo-vector-png-image_13830380.png" style={{height:"50px", margin:"0 5px"}} alt="" /><span className="badge text-light fs-5">News-Time</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>{setCategory("technology")}}>Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"style={{cursor:"pointer"}} onClick={()=>{setCategory("business")}}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"style={{cursor:"pointer"}} onClick={()=>{setCategory("health")}}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"style={{cursor:"pointer"}} onClick={()=>{setCategory("science")}}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"style={{cursor:"pointer"}} onClick={()=>{setCategory("sports")}}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"style={{cursor:"pointer"}} onClick={()=>{setCategory("entertainment")}}>Entertainment</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
