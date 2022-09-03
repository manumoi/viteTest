import React, { useContext, useState } from 'react'
import './organization.scss'
import { UserContext } from "../../context/userContext/UserContext"
import Topbar from '../../modules/topbar/Topbar'
import { contentDataRows } from '../../data/TestData.jsx'
import IduDataGrid from '../../modules/IduDataGrid/IduDataGrid'
import { useParams, useSearchParams } from 'react-router-dom'



const Organization = (props) => {

  const { user, setUser } = useContext(UserContext)
  const [searchParams, setSearchParams] = useSearchParams()
  //  const organizationId = searchParams.get("id")
  const { organizationId } = useParams();

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
      headerAlign: "center",
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
      align: "center",
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
          <div className="name">Le chateau fort</div>
          <div className="description">Bla ble bli blo blu</div>
          <button className="updateButton>">UPDATE</button>  
        </div>
        <div className="orgaUserPanel">
          {/* Admin/idu only. a remove button on each user item, add userButton visible */}
          <div className="userList">
            <div className="userItem">Jean Michel <button>X</button></div>
            <div className="userItem">Marcel Benhur <button>X</button></div>    
          </div> 
          <button className="userButton>">+</button>  
        </div>
        {/* <div className="contentTable">
          <IduDataGrid
            title="CONTENTS"
            columnsDescriptions={ContentColumnDescriptions}
            rowsData={contentDataRows} />
        </div> */}
      </div>
    </div >
  )
}

export default Organization

