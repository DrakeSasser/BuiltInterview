import { GridEntryType } from "../enums/GridEntryType";

export interface IGridData {
    name: string,
    type: GridEntryType,
    value: number,
    customer: string
}