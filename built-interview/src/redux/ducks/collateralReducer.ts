import { IGridData } from "../../interfaces/IGridData"
import { AddColateralAction } from "../actions"

export interface ICollateralState {
    collateralList: IGridData[]
}

const initialState = {
    collateralList: []
}

export const collateralReducer = (state:ICollateralState = initialState, action:AddColateralAction) => {
    switch(action.type){
        case "ADD_COLLATERAL": {
            return {...state, collateral: [...state.collateralList, action.payload]}
        }
        default:
        return state
    }
}