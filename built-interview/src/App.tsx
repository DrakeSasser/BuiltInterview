import { useDispatch, useSelector } from 'react-redux';
import { addLoan, addBudget, addCollateral } from './redux/actions';
import { Grid } from './components/Grid';
import { NewGridEntryInput } from './components/NewGridEntryInput';
import { IGridData } from './interfaces/IGridData';
import { AppState } from './redux/store';

function App() {
  const budgets = useSelector((state: AppState) => state.budget.budgetList);
  const collaterals = useSelector((state: AppState) => state.collateral.collateralList);
  const loans = useSelector((state: AppState) => state.loan.loanList);
  const dispatch = useDispatch()

  const onAddEntry = (entry: IGridData) => {
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

  return (
    <>
    <NewGridEntryInput addEntry = {onAddEntry}/>
    <Grid rowData={[...budgets, ...collaterals, ...loans]}/>
    </>
  );
}

export default App;
