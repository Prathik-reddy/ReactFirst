import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <a className="navbar-brand" href="#">{props.title}</a>
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
              {/* <Link className="nav-link" to="/">Home</Link> */}

            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">{props.About}</a>
              // <Link className="nav-link" to="/about">{props.About}</;>
            </li> */}
          </ul>
        </div>
          <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>

        </div>
      </nav>
    )
}

Navbar.propTypes= {title: PropTypes.string.isRequired,
About: PropTypes.string.isRequired}

// Should always declare a defaultProps section
Navbar.defaultProps= {title:"Set title here",
About : "Set aboutText here"}
