import React from 'react'
import './adaptiveAnalytic.scss'
import DpaCaseAnalytic from './dpaCase/DpaCaseAnalytic'
import VisitContentAnalytic from './visitContentAnalytic/VisitContentAnalytic'

const AdaptiveAnalytic = (props) => {

    console.log(props.type);

    const selectProperDisplay = ()=>{
        switch (props.type){
            case "dpa":
                return <DpaCaseAnalytic/>
            case "visit":
                return <VisitContentAnalytic/>
        }
    }

    return (
        <div className='adaptiveAnalytic'>
            {selectProperDisplay()}
            
        </div>
    )
}

export default AdaptiveAnalytic