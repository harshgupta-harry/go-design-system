import React from 'react';
import Typography from './index';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("This suit is to test the Body component", ()=>{

    test('Snapshot of Body', () => {
        const {asFragment} = render(<Typography title="hello world"/>);
        expect(asFragment()).toMatchSnapshot()
    });   
})