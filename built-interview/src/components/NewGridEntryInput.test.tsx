import React from 'react';
import { render } from '@testing-library/react'
import { NewGridEntryInput } from './NewGridEntryInput';

describe("input tests", () => {
    it("add a collateral item", () => {
        const addEntry = jest.fn();
        const component = render(<NewGridEntryInput addEntry= {addEntry}/>)
        const {getByTestId} = component;
        const addItemButton = getByTestId("button");
    })
})