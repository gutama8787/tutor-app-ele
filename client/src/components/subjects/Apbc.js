import React from 'react'
import Weeks from './Weeks'
import {useRouteMatch} from 'react-router-dom'

export default function Apbc() {
    let match = useRouteMatch()
    return (
        <div>
          <Weeks match = {match}/>
        </div>
    )
}
