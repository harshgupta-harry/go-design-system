import React from 'react';
import Typography from '../../packages/typography/index';
import {render} from '@testing-library/react';

describe("This suit is to test the Body component", ()=>{

    test('Snapshot of Body', () => {
        const {asFragment} = render(<Typography title="hello world"/>);
        expect(asFragment()).toMatchSnapshot()
    });   
})