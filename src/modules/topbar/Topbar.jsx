import React from 'react'
import './topbar.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';

const Topbar = () => {


  return (
    <div className='topbar'>
      <ArrowBackIcon className="backButton"/>
      <div className="iduLogo">IDÛ INTERACTIVE INC</div>
      <LogoutIcon className="logoutButton"/>
    </div>
  )
}

export default Topbar