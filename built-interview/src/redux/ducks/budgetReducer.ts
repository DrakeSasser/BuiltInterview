import { IGridData } from "../../interfaces/IGridData"
import { AddBudgetAction } from "../actions"

export interface IBudgetState {
    budgetList: IGridData[]
}

const initialState = {
    budgetList: []
}

export const budgetReducer = (state:IBudgetState = initialState, action:AddBudgetAction) => {
    switch(action.type){
        case "ADD_BUDGET": {
            return {...state, budgetList: [...state.budgetList, action.payload]}
        }
        default:
        return state
    }
}