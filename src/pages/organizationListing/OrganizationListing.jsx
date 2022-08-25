import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from '../../modules/DataTable/DataTable'
import IduDataGrid from '../../modules/IduDataGrid/IduDataGrid'
import Topbar from '../../modules/topbar/Topbar'
import './organizationListing.scss'
import {organizationDataRows, organizationColumnDescriptions} from '../../data/organizationData.jsx'



const OrganizationListing = () => {

  console.log(organizationColumnDescriptions)
  const navigate = useNavigate();

  const [userType, setUserType] = useState("regular")


  return (
    <div className="organizationListing">
        <Topbar/>
        <div className="main">
          <IduDataGrid 
            columnsDescriptions={organizationColumnDescriptions} 
            rowsData={organizationDataRows}/>
          {/* <DataTable/> */}
        </div>
    </div>
  )
}

export default OrganizationListing