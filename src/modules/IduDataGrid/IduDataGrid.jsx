import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './iduDataGrid.scss';




const IduDataGrid = (props) => {
  return (
    <div className="iduDataGrid">
      <div className="controlBar">
        <span className="title">ORGANIZATIONS</span>
        <button>+</button>
        <div />
      </div>
      <DataGrid
        rows={props.rowsData}
        columns={props.columnsDescriptions}
        pageSize={20}
        rowsPerPageOptions={[10,20,30]}
        checkboxSelection={false}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

export default IduDataGrid;
