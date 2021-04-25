import { combineReducers, createStore } from 'redux'
import { budgetReducer } from './ducks/budgetReducer'
import { collateralReducer } from './ducks/collateralReducer'
import { loanReducer } from './ducks/loanReducer'

const reducer = combineReducers({
    budget: budgetReducer,
    collateral: collateralReducer,
    loan: loanReducer
});

const store = createStore(reducer);

export default store;