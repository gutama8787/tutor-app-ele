import React from 'react'
import Weeks from './Weeks'
import {useRouteMatch} from 'react-router-dom'
// import './SideBar.css'
function Apcsa() {
    let match = useRouteMatch()
    return (
      <div>
        <Weeks match = {match}/>
      </div>
  )
}

export default Apcsa
