import { combineReducers, createStore } from 'redux'
import { budgetReducer, initialBudgetState } from './ducks/budgetReducer'
import { collateralReducer, initialCollateralState } from './ducks/collateralReducer'
import { initialLoanState, loanReducer } from './ducks/loanReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    budget: budgetReducer,
    collateral: collateralReducer,
    loan: loanReducer
});

const initialState = {
    budget: initialBudgetState,
    collateral: initialCollateralState,
    loan: initialLoanState,
}
export type AppState = typeof initialState;
const store = createStore(reducer, initialState as any, composeWithDevTools());

export default store;