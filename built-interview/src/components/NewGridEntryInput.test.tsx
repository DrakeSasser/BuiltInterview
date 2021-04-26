import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { NewGridEntryInput } from './NewGridEntryInput';

describe("input tests", () => {

    it("Name input renders", () => {
        const addEntry = jest.fn();
        const component = render(<NewGridEntryInput addEntry= {addEntry}/>);
        const {getByTestId} = component;
        const nameField = getByTestId("name");
        expect(nameField).toBeTruthy();
    })
    
    it("Add entry button renders", () => {
        const addEntry = jest.fn();
        const component = render(<NewGridEntryInput addEntry= {addEntry}/>)
        const {getByTestId} = component;
        const addItemButton = getByTestId("button");
        expect(addItemButton).toBeTruthy();
    })

    it("Add a blank item ", () => {
        const addEntry = jest.fn();
        const component = render(<NewGridEntryInput addEntry= {addEntry}/>)
        const {getByTestId} = component;
        const addItemButton = getByTestId("button");
        expect(addItemButton).toBeTruthy();
        fireEvent.click(addItemButton);
        expect(addEntry).toBeCalledTimes(1);
    })
})