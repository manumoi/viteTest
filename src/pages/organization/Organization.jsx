import React, { useContext, useState } from 'react'
import './organization.scss'
import { UserContext } from "../../context/userContext/UserContext"
import Topbar from '../../modules/topbar/Topbar'
import { contentDataRows } from '../../data/TestData.jsx'
import IduDataGrid from '../../modules/IduDataGrid/IduDataGrid'
import { useParams, useSearchParams } from 'react-router-dom'

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material'


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
    <div>
      <Topbar />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap', width: '50%' }}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            label="Name"
            id="orga-name"
            sx={{ m: 1, flex: 1 }}
            disabled
            size="small"
          />
          <TextField
            label="Description"
            id="orga-description"
            sx={{ m: 1, flex: 1 }}
            disabled
            multiline
            rows={6}
            size="small"
          />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around" }}>
            <TextField
              label="Orga Code"
              id="orga-code"
              sx={{ flex: 1, m: 1 }}
              disabled
              size="small"
            />
            <TextField
              label="Orga Validation"
              id="orga-valid"
              sx={{ flex: 1, m: 1 }}
              disabled
              size="small"
            />
          </Box>
          <Button>UPDATE</Button>
        </FormControl>
      </Box>
    </div>
  );


  // return (
  //   <div className='organization'>
  //     <Topbar />
  //     <div className="main">
  //       <div className="updatePanel">
  //         <TextField className="name"></TextField>
  //         <TextField className="description"></TextField>
  //         <div className="masterInfo">
  //           <TextField className='code'></TextField>
  //           <TextField className='pwd'></TextField>
  //         </div>
  //         <Button className="updateButton"></Button>
  //         {/* <div className="name">Le chateau fort</div>
  //         <div className="description">Bla ble bli blo blu</div>
  //         <div className="masterInfo">
  //             <div className= "code">Code</div>
  //             <div className= "pwd">AccessCode</div>
  //         </div>
  //         <button className="updateButton>">UPDATE</button>   */}
  //       </div>
  //       <div className="orgaUserPanel">
  //         {/* Admin/idu only. a remove button on each user item, add userButton visible
  //         <div className="userList">
  //           <div className="userItem">Jean Michel <button>X</button></div>
  //           <div className="userItem">Marcel Benhur <button>X</button></div>    
  //         </div> 
  //         <button className="userButton>">+</button>   */}
  //       </div>
  //       {/* <div className="contentTable">
  //         <IduDataGrid
  //           title="CONTENTS"
  //           columnsDescriptions={ContentColumnDescriptions}
  //           rowsData={contentDataRows} />
  //       </div> */}
  //     </div>
  //   </div >
  // )
}

export default Organization

