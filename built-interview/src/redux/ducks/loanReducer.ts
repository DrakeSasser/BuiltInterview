import { IGridData } from "../../interfaces/IGridData"
import { AddLoanAction } from "../actions"

export interface ILoansState {
    loanList: IGridData[]
}

const initialState = {
    loanList: []
}

export const loanReducer = (state:ILoansState = initialState, action:AddLoanAction) => {
    switch(action.type){
        case "ADD_LOAN": {
            return {...state, loans: [...state.loanList, action.payload]}
        }
        default:
        return state
    }
}