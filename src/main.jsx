import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import App from './pages/App'
import FetchTraining from './testAndTraining/FetchTraining'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchTraining/>
    {/* <App/> */}
  </React.StrictMode >
)
