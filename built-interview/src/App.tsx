import { useDispatch, useSelector } from 'react-redux';
import { addLoan, addBudget, addCollateral } from './redux/actions';
import { Grid } from './components/Grid';
import { NewGridEntryInput } from './components/NewGridEntryInput';
import { IGridData } from './interfaces/IGridData';
import { ILoansState } from './redux/ducks/loanReducer';
import { IBudgetState } from './redux/ducks/budgetReducer';
import { ICollateralState } from './redux/ducks/collateralReducer';

function App() {
  const budgets = useSelector<IBudgetState, IBudgetState["budgetList"]>((state) => state.budgetList);
  const collaterals = useSelector<ICollateralState, ICollateralState["collateralList"]>((state) => state.collateralList);
  const loans = useSelector<ILoansState, ILoansState["loanList"]>((state) => state.loanList);
  const dispatch = useDispatch()

  const onAddEntry = (entry: IGridData) => {
    //this is where we need to check the type to call the appropriate action
    switch(entry.type){
      case "Budget":
       dispatch(addBudget(entry));
       return;
       case "Collateral":
        dispatch(addCollateral(entry));
        return;
       case "Loan":
        dispatch(addLoan(entry));
       return;
       default:
         return;
    }
  }

  const rowDataHelper = () => {
    let rowData: IGridData[] = [];
    if(budgets !== undefined)
    {
      rowData.concat(budgets, collaterals, loans);
    }
    return rowData
  }

  return (
    <>
    <Grid rowData={rowDataHelper}/>
    <NewGridEntryInput addEntry = {onAddEntry}/>
    </>
  );
}

export default App;
