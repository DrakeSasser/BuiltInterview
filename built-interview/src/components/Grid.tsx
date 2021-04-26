import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { Component } from 'react';
import { IGridData } from '../interfaces/IGridData';
import { ColDef } from 'ag-grid-community';

interface GridProps extends AgGridReactProps {

}

interface GridState{
  columnDefs: ColDef[];
  rowData: IGridData[];
}

export class Grid extends Component<GridProps> {
  state = {
    columnDefs: [
      {headerName: 'Name', field: 'name', sortable: true, filter: true, editable: true, checkboxSelection: true},
      {headerName: 'Type', field: 'type', sortable: true, filter: true, editable: true},
      {headerName: 'Value', field: 'value', sortable: true, filter: true, editable: true},
      {headerName: 'Customer', field: 'customer', sortable: true, filter: true, editable: true}
    ],
    rowData: this.props.rowData,
  }
   
  componentDidUpdate(prevProps: GridProps, prevState: GridState): void {
    if (this.props.rowData !== prevProps.rowData) {
      this.setState({rowData: this.props.rowData})
    }
  }

    render() {
        return (
            <div
            className="ag-theme-balham"
            style={{
              width:800,
              height:600
            }}>
              <AgGridReact
              columnDefs = {this.state.columnDefs}
              rowData = {this.state.rowData}
              rowSelection="multiple"
              />
            </div>
          )
    }
  }