import React, { useContext, useState } from 'react'
import './organization.scss'
import { UserContext } from "../../context/userContext/UserContext"
import Topbar from '../../modules/topbar/Topbar'
import { contentDataRows } from '../../data/TestData.jsx'
import IduDataGrid from '../../modules/IduDataGrid/IduDataGrid'
import { color } from '@mui/system'
import { red } from '@mui/material/colors'


const Organization = () => {

  const { user, setUser } = useContext(UserContext)

  const ContentColumnDescriptions = [
    {
      field: 'name',
      headerName: 'Project Name',
      width: 300,
      
    },
    {
      field: 'presentation',
      headerName: 'Project Overview',
      width: 700,
    },
    {
      field: 'variantNb',
      headerName: 'Variants',
      headerAlign:"center",
      width: 90,
      align: "center"
    },
    {
      field: 'edit',
      headerName: 'Edit',
      headerAlign: "center",
      align: "center",
      width: 90,
      renderCell: (params) => {
        return (
          <button>EDIT</button>
        )
      }
    },
    {
      field: 'delete',
      headerName: 'Delete',
      headerAlign: "center",
      align:"center",
      width: 90,
      renderCell: (params) => {
        return (
          <button>DELETE</button>
        )
      }
    },
  ];




  return (
    <div className='organization'>
      <Topbar />

      <div className="main">
        <div className="updatePanel">
          <form type="submit">
            <input placeholder="Name..." />
            <input placeholder="Description..." />
            <button>Update Information</button>
            <button>Edit Users</button>
          </form>

        </div>
        <div className="contentTable">
          <IduDataGrid
            title="CONTENTS"
            columnsDescriptions={ContentColumnDescriptions}
            rowsData={contentDataRows} />
        </div>
      </div>
    </div >
  )
}

export default Organization

