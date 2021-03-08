import React from 'react'
// import Topic from './Topic'
import {Route, Link,useRouteMatch} from 'react-router-dom'
import {Apcsa, Apab, Apbc, Questions} from './subjects/Subjects'
/**
 * This is the navigation bar component.
 * each link in the nav bar should rout to a given subject.
 * Ex. if you click AP CS. A page with CS material will be rendered. 
 * 
 */
const NavBar = () => {
    const style = {
        color: "",
        listStyleType: "none"
    }
    const navStyle = {
      backgroundColor: "#e3f2fd"
    }
    let match = useRouteMatch();
    return (
        <div>
            {console.log(match)}
            <nav className="navbar navbar-light" style={navStyle}>  
                 <li className="nav-item">
                   <Link className="nav-link" style = {style} to="/subjects/Apcsa">
                    AP CS
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" style = {style} to="/subject/Apbc">
                    AP BC
                </Link>
                </li>
                <li className="nav-item"> 
                <Link className="nav-link" style = {style}  to="/subjects/Apab">
                    AP AB
                </Link>
                </li>
                {/* The question section should be changed to general announcment 
                Section.  */}
                <li className="nav-item">
                <Link className="nav-link" style = {style}  to="/subjects/Questions">
                    Questions
                </Link>
                </li>
            </nav>
          <Route path="/subjects/Apcsa">
            <Apcsa />
          </Route>
          <Route path="/subject/Apbc">
            <Apbc />
          </Route>
          <Route path="/subjects/Apab">
            <Apab />
          </Route>
          <Route path="/subjects/Questions">
            <Questions />
          </Route>
        </div>
    )
}

export default NavBar