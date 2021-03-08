import React from 'react'
import Weeks from './Weeks'
import {Link,Switch,Route,useRouteMatch} from 'react-router-dom'
// import './SideBar.css'
export default function Apab() {
    let match = useRouteMatch()
    return (
        <div>
          <Weeks match = {match}/>
        </div>
    )
}
