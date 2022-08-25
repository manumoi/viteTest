import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from '../../modules/DataTable/DataTable'
import Topbar from '../../modules/topbar/Topbar'
import './organizationListing.scss'



const OrganizationListing = () => {

  const navigate = useNavigate();

  const [userType, setUserType] = useState("regular")

  

  return (
    <div className="organizationListing">
        <Topbar title="Organizations"/>
        <div className="main">
          <DataTable/>
        </div>
    </div>
  )
}

export default OrganizationListing