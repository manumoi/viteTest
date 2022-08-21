import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './organizationListing.scss'

const OrganizationListing = () => {

  const navigate = useNavigate();

  const [userType, setUserType] = useState("regular")

  // useEffect(()=>{
  //   if (userType=="regular")
  //     navigate("1234")
  // }, [])



  return (
    <div className="organizationListing">
        Organizations
    </div>
  )
}

export default OrganizationListing