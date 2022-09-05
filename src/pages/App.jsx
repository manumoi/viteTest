import React, { useMemo, useState } from 'react'
import './app.scss'
import Home from './home/Home'
import Login from './login/Login'
import OrganizationListing from './organizationListing/OrganizationListing'
import Organization from './organization/Organization'
import OrganizationAnalytics from './organizationAnalytics/OrganizationAnalytics'
import Content from './content/Content'
import ContentAnalytics from './contentAnalytics/ContentAnalytics'
import Study from './study/Study'
import StudyAnalytics from './studyAnalytics/StudyAnalytics'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { UserContext } from '../context/userContext/UserContext'
import TestFlexBox from './testFlexBox/TestFlexBox'


const App = () => {

  const[user, setUser]=useState(null)
  const userMemo = useMemo(()=>({user, setUser}), [user, setUser])

  // return (
  //   <div className='app'>
  //     <TestFlexBox/>
  //   </div>
  // )

  return (
    <div className='app'>
      <BrowserRouter>
        <UserContext.Provider value={userMemo}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="organizations"> {/*Only available to admin users*/}
                <Route index element={<OrganizationListing />} />
                <Route path=":organizationId">
                  <Route index element={<Organization/>} />
                  <Route path="analytics" element={<OrganizationAnalytics />} />
                </Route>
              </Route>
              <Route path="contents"> {/*List of contents visible in OrganizationPage*/}
                <Route path=":contentId">
                  <Route index element={<Content />} />
                  <Route path="analytics" element={<ContentAnalytics />} />
                </Route>
              </Route>
              <Route path="studies"> {/*List of studies visible in OrganizationPage*/}
                <Route path=":studyId">
                  <Route index element={<Study />} />
                  <Route path="analytics" element={<StudyAnalytics />} />
                </Route>
              </Route>
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}


export default App