import React from 'react'
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
  Route,
  useNavigate
} from "react-router-dom";

const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="organizations" element={<OrganizationListing/>}>
              <Route path=":organizationId" element={<Organization />}>
                <Route path="analytics" element={<OrganizationAnalytics />} />
              </Route>
            </Route>
            <Route path="contents"> {/*List of contents visible in OrganizationPage*/}
              <Route path=":contentId" element={<Content />}>
                <Route path="analytics" element={<ContentAnalytics />} />
              </Route>
            </Route>
            <Route path="studies"> {/*List of studies visible in OrganizationPage*/}
              <Route path=":studyId" element={<Study />}>
                <Route path="analytics" element={<StudyAnalytics />} />
              </Route>
            </Route>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App