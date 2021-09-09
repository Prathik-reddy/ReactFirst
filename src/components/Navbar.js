import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">Home</a> */}
              <Link className="nav-link" to="/">Home</Link>

            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/about">{props.About}</a> */}
              <Link className="nav-link" to="/about">{props.About}</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode("primary")}} style={{height:"30px",width:"30px",cursor:"pointer"}}>
          </div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode("success")}} style={{height:"30px",width:"30px",cursor:"pointer"}}>
          </div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode("danger")}} style={{height:"30px",width:"30px",cursor:"pointer"}}>
          </div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode("warning")}} style={{height:"30px",width:"30px",cursor:"pointer"}}>
          </div>
          <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode("light")}} style={{height:"30px",width:"30px",cursor:"pointer"}}>
          </div>
          <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode("dark")}} style={{height:"30px",width:"30px",cursor:"pointer"}}>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes= {title: PropTypes.string.isRequired,
About: PropTypes.string.isRequired}

// Should always declare a defaultProps section
Navbar.defaultProps= {title:"Set title here",
About : "Set aboutText here"}
