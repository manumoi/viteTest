import React from 'react'
import { useState } from 'react'

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


console.log("FETCH TRAINING");

const fetchTypes = {
    Jokes: 'joke',
    FreeApis: 'apis'
}

const jokeUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode'
const freeApisUrl = 'https://api.publicapis.org/entries'

const columns = [
    {
        field: 'id',
        headerName: '#',
        headerClassName: 'super-app-theme--header-red',
        headerAlign: "center",
        align: "center",
        flex: 1,
    },
    {
        field: 'api',
        headerName: 'API Name',
        headerClassName: 'super-app-theme--header-green',
        flex: 3,
    },
    {
        field: 'description',
        // headerName: 'Description',
        headerClassName: 'super-app-theme--header-blue',
        flex: 10,
    },
    {
        field: 'link',
        headerName: 'Go to Homepage of the API',
        headerClassName: 'super-app-theme--header-red',
        flex: 2,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => {
            return (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "yellow", width: "100%", height: "100%" }}>
                    <button
                        style={{ border: 'lightgray 1px solid', borderRadius: "5px", width: "80px", height: "30px" }}
                        onClick={(e) => window.open(params.value, '_blank')}>Link</button>
                </Box>
            )
        }
    }
]

const FetchTraining = () => {

    const [lastRequest, setLastRequest] = useState('');
    const [programmingJoke, setProgrammingJoke] = useState({})
    const [dataRows, setDataRows] = useState([])

    const FetchData = async (e) => {
        try {
            setLastRequest(e.target.id)
            switch (e.target.id) {
                case fetchTypes.Jokes:

                    const data = await (await fetch(jokeUrl)).json()
                    console.log(data)
                    setProgrammingJoke({ setup: data.setup, delivery: data.delivery })
                    setDataRows([])
                    break;
                case fetchTypes.FreeApis:
                    const data2 = await (await fetch(freeApisUrl)).json()
                    console.log(data2)
                    let result = data2.entries.map((item, index) => {
                        return ({ id: index, api: item.API, description: item.Description, link: item.Link })
                    })
                    setProgrammingJoke({})
                    setDataRows(result)
                    console.log(dataRows)
                    break;
                default:
                    break;
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div style={{ display: 'flex',  flexDirection: 'column',  alignItems: "center",  width: '100vw', height: '100vh'}}>  
        {/* flexGrow: '1',flex: '1', */}
            <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                <button id={fetchTypes.Jokes} onClick={(e) => FetchData(e)}>FETCH JOKE</button>
                <button id={fetchTypes.FreeApis} onClick={(e) => FetchData(e)}>FETCH Free API</button>
            </div>
            {(lastRequest == fetchTypes.Jokes) &&
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        S: {programmingJoke.setup}
                    </div>
                    <div>
                        D: {programmingJoke.delivery}
                    </div>
                </div>
            }
            {
                (lastRequest == fetchTypes.FreeApis) &&
                //<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Box sx={{ display: 'flex', width: "90%", height:"90%",  
                    '& .super-app-theme--header-red': {
                        backgroundColor: 'rgba(255, 7, 0, 0.55)',
                    },
                    '& .super-app-theme--header-green': {
                        backgroundColor: 'rgba(7, 255, 0, 0.55)',
                    },
                    '& .super-app-theme--header-blue': {
                        backgroundColor: 'rgba(7, 0, 255, 0.55)',
                    },
                }}>
                    <DataGrid
                        rows={dataRows}
                        columns={columns}
                        rowsPerPageOptions={[10, 20, 50, 100]}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        sx={{
                            '& .MuiDataGrid-cell:hover': {
                                color: "red",
                                backgroundColor: "yellow",
                                // 'primary.main',
                            },
                        }}
                    />
                </Box>
                //      </div>
            }
        </div >
    )
}

export default FetchTraining