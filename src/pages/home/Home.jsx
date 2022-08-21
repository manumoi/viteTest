import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './home.scss'


const Home = () => {

  //regular or admin
  const [userType, setUserType] = useState("regular")
  const [organizationId, setOrganizationId] = useState('123456')
  const navigate = useNavigate();


  useEffect(() => {
    switch (userType) {
      case "regular":
        console.log("Display organization")
        navigate(`organizations/${organizationId}`);
        break;
      case "admin":
        console.log("Display organizations")
        navigate('organizations');
        break;
    }
    // if (!UType) {
    //   
    //   return;
    // }
    // switch (userType) {
    //   case "admin":
    //     Navigate('organizations')
    //     break;
    //   default:
    //     Navigate('organization');
    // }
  }, [])


  return (
    <div className="home">
      basculer vers organization si classic users et vers organization"s" si idu users
    </div>
  )
}

export default Home