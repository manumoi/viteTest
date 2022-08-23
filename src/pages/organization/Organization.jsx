import React, { useEffect, useState } from 'react'
import './organization.scss'
import UserProfile from "../../global/UserProfile"

const Organization = () => {

  function handleIncrement(){
    UserProfile.handleIncrement()
  }

  return (
    <div className='organization'>
        Organization Id: {UserProfile.organizationId}
        <br/>
      //  <button onClick={handleIncrement}>INCREMENT</button>
    </div>
  )
}

export default Organization

