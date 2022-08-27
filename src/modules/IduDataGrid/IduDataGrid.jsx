import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './iduDataGrid.scss';




const IduDataGrid = (props) => {
  return (
    <Box className="iduDataGrid">
      <div className="controlBar">
        <span className="title">{props.title}</span>
        <button>+</button>
        <div />
      </div>
      <DataGrid
        rows={props.rowsData}
        columns={props.columnsDescriptions}
        pageSize={20}
        rowsPerPageOptions={[10,50,100]}
        checkboxSelection={false}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

export default IduDataGrid;
