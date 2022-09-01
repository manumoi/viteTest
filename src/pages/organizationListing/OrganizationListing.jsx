import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from '../../modules/DataTable/DataTable'
import IduDataGrid from '../../modules/IduDataGrid/IduDataGrid'
import Topbar from '../../modules/topbar/Topbar'
import './organizationListing.scss'
import { organizationDataRows } from '../../data/TestData.jsx'

const OrganizationListing = () => {
  
  const [userType, setUserType] = useState("regular")
  const navigate = useNavigate();


  // Description of the various columns of the dataGrid of this page
  const organizationColumnDescriptions = [
    {
      field: 'name',
      headerName: 'Name',
      width: 500
    },
    {
      field: 'code',
      headerName: 'Code',
      width: 90,
    },
    {
      field: 'presentation',
      headerName: 'Presentation',
      width: 500,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      headerAlign: "center",
      width: 90,
      renderCell: (params) => {
        return (
          <button onClick={(e)=>handleOrganizationEditing(e, params.id)}>EDIT</button>
        )
      }
    },
    {
      field: 'delete',
      headerName: 'Delete',
      headerAlign: "center",
      width: 90,
      renderCell: (params) => {
        return (
          <button /*onClick={console.log(`DELETE params ${params.id}`)}*/>DELETE</button>
        )
      }
    },
  ];

  const handleOrganizationEditing = (e, id)=>{
    e.preventDefault();
    console.log(`navigating to ${id}`)
    navigate(String(id))
  }
  

  return (
    <div className="organizationListing">
      <Topbar />
      <div className="main">
        <IduDataGrid
          title="ORGANIZATIONS"
          columnsDescriptions={organizationColumnDescriptions}
          rowsData={organizationDataRows} />
      </div>
    </div>
  )
}

export default OrganizationListing