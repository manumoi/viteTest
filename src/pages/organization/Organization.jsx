import React, { useContext, useState } from 'react'
import './organization.scss'
import { UserContext } from '../../context/UserContext/UserContext'

const Organization = () => {

  const {user, setUser} = useContext(UserContext)

  return (
    <div className='organization'>
        Organization Id: {JSON.stringify(user, null, 2)}
    </div>
  )
}

export default Organization

