import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { GridEntryType } from '../enums/GridEntryType';
import { IGridData } from '../interfaces/IGridData'

interface InputProps {
    addEntry(entry:IGridData): void;
}

export const NewGridEntryInput:React.FC<InputProps> = ({addEntry: addEntry}) => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState("");
    const [value, setValue] = React.useState(0);
    const [customer, setCustomer] = React.useState("");
    const [type, setType] = React.useState(GridEntryType.Budget);


    const updateName =(event:ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const updateValue =(event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.valueAsNumber)
    }

    const updateCustomer =(event:ChangeEvent<HTMLInputElement>) => {
        setCustomer(event.target.value)
    }

    const updateType =(event:ChangeEvent<HTMLInputElement>) => {
        setType(GridEntryType[event.target.value as keyof typeof GridEntryType])
    }

    const resetForm =() => {
        setName("");
        setValue(0);
        setCustomer("");
    }

    const onAddNoteClick = () => {
        addEntry({name: name, type: type, value: value, customer: customer})
        resetForm();
    }
    return (
    <div>
        <h3>Name</h3>
        <input onChange={updateName} value ={name} type="text" name="name" placeholder="Name"/>
        <h3>Value</h3>
        <input onChange={updateValue} value ={value} type="number" name="value" placeholder="Value"/>
        <h3>Customer</h3>
        <input onChange={updateCustomer} value ={customer} type="text" name="customer" placeholder="Customer"/>
        <h3>Type</h3>
        <input onChange={updateType} type="radio" id="Budget" name="entryType" value={GridEntryType.Budget}></input>
        <label htmlFor="Budget">Budget</label><br></br>
        <input onChange={updateType} type="radio" id="Collateral" name="entryType" value={GridEntryType.Collateral}></input>
        <label htmlFor="Collateral">Collateral</label><br></br>
        <input onChange={updateType} type="radio" id="Loan" name="entryType" value={GridEntryType.Loan}></input>
        <label htmlFor="Loan">Loan</label><br></br>
        <button onClick={onAddNoteClick} data-testid= {"button"}>Add entry</button>
    </div>
    )
}