import { IGridData } from "../interfaces/IGridData"

export type AddLoanAction = {type: "ADD_LOAN", payload: IGridData}
export type AddBudgetAction = {type: "ADD_BUDGET", payload: IGridData}
export type AddColateralAction = {type: "ADD_COLLATERAL", payload: IGridData}

export const addLoan = (loan: IGridData):AddLoanAction => ({
    type: "ADD_LOAN",
    payload: loan
})

export const addBudget = (budget: IGridData):AddBudgetAction => ({
    type: "ADD_BUDGET",
    payload: budget
})

export const addCollateral = (collateral: IGridData):AddColateralAction => ({
    type: "ADD_COLLATERAL",
    payload: collateral
})