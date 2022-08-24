import React from 'react'
//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./dataTable.scss"

const DataTable = () => {

    // Organizations Table
    function createData(Title, OrgaCode, NbContents) {
        return { Title, OrgaCode, NbContents };
    }

    const rows = [
        createData('IDU Interactive', "IDU", 5),
        createData('IDU Interactive', "IDU", 5),
        createData('IDU Interactive', "IDU", 5),
        createData('IDU Interactive', "IDU", 5),
        createData('IDU Interactive', "IDU", 5),
    ];

    return (
        <TableContainer component={Paper} className="dataTable">
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Organization</TableCell>
                        <TableCell align="center">Code</TableCell>
                        <TableCell align="center">Nb Contents</TableCell>
                        <TableCell align="right">Edit Contents</TableCell>
                        <TableCell align="right">Edit Organization</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {/* <TableCell component="th" scope="row">
                                {row.name}
                    </TableCell>*/}
                            <TableCell align="left">{row.Title}</TableCell> 
                            <TableCell align="center">{row.OrgaCode}</TableCell>
                            <TableCell align="center">{row.NbContents}</TableCell>
                            <TableCell align="right">EDIT</TableCell>
                            <TableCell align="right">EDIT</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable