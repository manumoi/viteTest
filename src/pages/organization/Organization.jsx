import React, { useContext, useState } from 'react'
import { UserContext } from "../../context/userContext/UserContext"
import Topbar from '../../modules/topbar/Topbar'
import { contentDataRows } from '../../data/TestData.jsx'
import IduDataGrid from '../../modules/IduDataGrid/IduDataGrid'
import { useParams, useSearchParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';

import {
  Box, Paper, IconButton, Input, FilledInput, OutlinedInput, InputLabel,
  InputAdornment, FormHelperText, FormControl, TextField, Button, 
} from '@mui/material/'
import Grid from '@mui/material/Unstable_Grid2';
import { Visibility, VisibilityOff, } from '@mui/icons-material/'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Organization = (props) => {

  const { user, setUser } = useContext(UserContext)
  const [searchParams, setSearchParams] = useSearchParams()
  //  const organizationId = searchParams.get("id")
  const { organizationId } = useParams();

  const ContentColumnDescriptions = [
    {
      field: 'name',
      headerName: 'Project Name',
      flex: 3,
      //    width: '20%',

    },
    {
      field: 'presentation',
      headerName: 'Project Overview',
      flex: 5
      //    width: '40%',
    },
    {
      field: 'variantNb',
      headerName: 'Variants',
      headerAlign: "center",
      flex: 1,
      //    width: '10%',
      align: "center"
    },
    {
      field: 'edit',
      headerName: 'Edit',
      align: "center",
      headerAlign: "center",
      flex: 1,
      // width: '10%',
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
      flex: 1,
      //  width: '10%',
      renderCell: (params) => {
        return (
          <button>DELETE</button>
        )
      }
    },
  ];

  return (
    <div sx={{ display: 'flex', flexDirection: 'column' }}>
      <Topbar />
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
        {/* <Box sx={{ display: 'flex', flexGrow:'1', width: '30%', margin: "20px" }}> */}
        <Box sx={{flexGrow:'1'}}>
          <Grid container spacing={2}>
            <Grid sx={12}><Item>12</Item></Grid>
            <Grid sx={8}><Item>8</Item></Grid>
            <Grid sx={4}><Item>4</Item></Grid>
            <Grid sx={3}><Item>3</Item></Grid>
            <Grid sx={12}>
                <Button variant='contained' sx={{ display: 'flex', width: '25%', alignSelf: 'center' }}>UPDATE</Button>
            </Grid>
          </Grid>
          {/* <FormControl fullWidth>
            <TextField
              label="Name"
              id="orga-name"
              sx={{ m: 1, }}
              disabled
              size="small"
            />
            <TextField
              label="Description"
              id="orga-description"
              sx={{ m: 1, }}
              disabled
              multiline
              rows={6}
              size="small"
            />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around" }}>
              <TextField
                label="Orga Code"
                id="orga-code"
                sx={{ m: 1, flex: '1' }}
                disabled
                size="small"
              />
              <TextField
                label="Orga Validation"
                id="orga-valid"
                sx={{ m: 1, flex: '1' }}
                disabled
                size="small"
              />
            </Box>
          </FormControl> */}
        </Box>
        <Box sx={{ display: 'flex', width: '70%', height: '100%', backgroundColor: 'blue' }}>
          <IduDataGrid
            title="CONTENTS"
            columnsDescriptions={ContentColumnDescriptions}
            rowsData={contentDataRows} />

        </Box>
      </Box>
    </div>
  )
  {/* <div> */ }
  {/* sx={{ display: 'flex' }}> */ }
  {/* <Box sx={{width:"300", height:"300", backgroundColor:'yellow'}}>Test</Box> */ }
  {/* <Box sx={{ display:'flex', backgroundColor:'red'}}></Box> */ }
  {/* <Box sx={{ backgroundColor:'yellow', display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap', width: '40%' }}>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap', width: '40%', backgroundColor:'red'}}>

        </Box> */}
  {/* </div> */ }
  //   </div >
  // );


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
  //       </div> */}
  //         <IduDataGrid
  //           title="CONTENTS"
  //           columnsDescriptions={ContentColumnDescriptions}
  //           rowsData={contentDataRows} />
  //     </div>
  //   </div >
  // )
}

export default Organization

