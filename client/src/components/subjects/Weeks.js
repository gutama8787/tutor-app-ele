import React from 'react'
import Topic from './Topic'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

 const Weeks = (props) => {
   let match = props.match;
   console.log(match.url)
  return (
    <div>
        <div>
    <nav className="nav navbar-light">
      <li className="nav-item">
        <Link className="nav-link" to={`${match.url}/week00`}>
          week00
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`${match.url}/week01`}>
          week01
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`${match.url}/week02`}>
          week02
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`${match.url}/week03`}>
          week03
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`${match.url}/week04`}>
          week04
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`${match.url}/week05`}>
          week05
        </Link>
      </li>
    </nav>
     <h2>{match.url}</h2>
    {/* The Topics page has its own <Switch> with more routes
        that build on the /topics URL path. You can think of the
        2nd <Route> here as an "index" page for all topics, or
        the page that is shown when no topic is selected */}
    <Switch>
      <Route path={`${match.path}/:topicId`}>
        <Topic />
      </Route>
      <Route path={match.path}>
        <h3>Please select a topic.</h3>
      </Route>
    </Switch>
  </div>
    </div>
)
}

export default Weeks;
