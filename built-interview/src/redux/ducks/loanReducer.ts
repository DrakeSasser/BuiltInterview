import { IGridData } from "../../interfaces/IGridData"
import { AddLoanAction } from "../actions"

export interface ILoansState {
    loanList: IGridData[]
}

export const initialLoanState = {
    loanList: []
}

export const loanReducer = (state:ILoansState = initialLoanState, action:AddLoanAction) => {
    switch(action.type){
        case "ADD_LOAN": {
            return {...state, loanList: [...state.loanList, action.payload]}
        }
        default:
            return {...state}
    }
}