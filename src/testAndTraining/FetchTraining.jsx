import React from 'react'
import { useState } from 'react'

console.log(" youpi FetchTraining")

const fetchTypes = {
    Jokes: 'joke',
    FreeApis: 'apis'
}

const jokeUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode'
const freeApisUrl = 'https://api.publicapis.org/entries'

const FetchTraining = () => {

    const [lastRequest, setLastRequest] = useState('');
    const [setup, setSetup] = useState('')
    const [delivery, setDelivery] = useState('')
    const [list, setList] = useState()

    const FetchData = async (e) => {
        setLastRequest(e.target.id)
        switch (e.target.id) {
            case fetchTypes.Jokes:

                const data = await (await fetch(jokeUrl)).json()
                console.log(data)
                setSetup(data.setup)
                setDelivery(data.delivery)
                setList()
                break;
            case fetchTypes.FreeApis:
                const data2 = await (await fetch(freeApisUrl)).json()
                console.log(data2)
                let result = data2.entries.map((item, index) => {
                    return <li key={index}>{index}: {item.API} - {item.Description}</li>
                })
                setSetup('')
                setDelivery('')
                setList(result)
                break;
            default:
                break;

        }
        try {

        }
        catch (err) {
            console.log(err)
        }
    }



    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div>
                <button id={fetchTypes.Jokes} onClick={(e) => FetchData(e)}>FETCH JOKE</button>
                <button id={fetchTypes.FreeApis} onClick={(e) => FetchData(e)}>FETCH Free API</button>
            </div>
            <div style={(lastRequest == fetchTypes.Jokes) ? { display: `inline` } : { display: `none` }}>
                S: {setup}
            </div>
            <div style={(lastRequest == fetchTypes.Jokes) ? { display: `inline` } : { display: `none` }}>
                D: {delivery}
            </div>
            <div style={(lastRequest == fetchTypes.FreeApis) ? { display: `inline` } : { display: `none` }}>
                {list}
            </div>
        </div>
    )
}

export default FetchTraining