import React from 'react'
import './app.scss'
// <<<<<<< HEAD
// =======

// import Home from './home/Home'
// import Login from './login/Login'
// import Organizations from './Organizations/Organizations'
// import Organization from './organization/organization'
// import Content from './content/Content'
// import ContentAnalytics from './contentAnalytics/ContentAnalytics'
// import Study from './study/Study'
// import StudyAnalytics from './studyAnalytics/StudyAnalytics'
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// >>>>>>> 3749cea3b9ce3b577c50242bffeb56b23ef5ef1a

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
          <Route index element={<Home/>}/>
          <Route path="organizations"> {/*Only available to admin users*/}
            <Route index element={<OrganizationListing />}/>
            <Route path=":organizationId">
              <Route index element={<Organization />}/>
              <Route path="analytics" element={<OrganizationAnalytics />} />
            </Route>
          </Route>
          <Route path="contents"> {/*List of contents visible in OrganizationPage*/}
            <Route path=":contentId">
              <Route index element={<Content />}/>
              <Route path="analytics" element={<ContentAnalytics />} />
            </Route>
          </Route>
          <Route path="studies"> {/*List of studies visible in OrganizationPage*/}
            <Route path=":studyId">
              <Route index element={<Study />}/>
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