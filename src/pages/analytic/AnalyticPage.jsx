import React from 'react'
import './analyticPage.scss'
import AdaptiveAnalytic from './modules/adaptiveAnalytic/AdaptiveAnalytic'
import Sidebar from './modules/sidebar/Sidebar'

const AnalyticPage = () => {
  return (
    <div className='analyticPage'>
        <Sidebar/>
        <AdaptiveAnalytic type="visit"/> 
    </div>
  )
}

export default AnalyticPage