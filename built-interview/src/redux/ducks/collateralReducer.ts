import { IGridData } from "../../interfaces/IGridData"
import { AddColateralAction } from "../actions"

export interface ICollateralState {
    collateralList: IGridData[]
}

export const initialCollateralState = {
    collateralList: []
}

export const collateralReducer = (state:ICollateralState = initialCollateralState, action:AddColateralAction) => {
    switch(action.type){
        case "ADD_COLLATERAL": {
            return {...state, collateralList: [...state.collateralList, action.payload]}
        }
        default:
            return {...state}
    }
}