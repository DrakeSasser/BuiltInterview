import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { IGridData } from '../interfaces/IGridData';
import { GridEntryType } from '../enums/GridEntryType';

export class Grid extends AgGridReact {
  columnDefs: (ColDef | ColGroupDef)[] | undefined;
  test: IGridData[];
  rowData: any[] | undefined;
  
    constructor (props: any) {
        super(props);
        this.test = [{name: "DrakeLoan", type: GridEntryType.Loan, value: 15_000, customer: "Drake"}, {name: "BecaBudget", type: GridEntryType.Budget, value: 1, customer: "Beca"}]
        this.columnDefs = [
                {headerName: 'Name', field: 'name', sortable: true, filter: true, checkboxSelection: true},
                {headerName: 'Type', field: 'type', sortable: true, filter: true},
                {headerName: 'Value', field: 'value', sortable: true, filter: true},
                {headerName: 'Customer', field: 'customer', sortable: true, filter: true}
        ];
        this.rowData= props.rowData;
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
              columnDefs = {this.columnDefs}
              rowData = {this.rowData}
              rowSelection="multiple"
              />
            </div>
          )
    }
  }