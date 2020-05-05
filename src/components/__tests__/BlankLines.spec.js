import React from 'react';
import BlankLines from '../BlankLines';
import renderer from 'react-test-renderer';

describe('Test Banner component', () => {

    it('should validate the component', () => {
        const component = renderer.create(<BlankLines />).toJSON();

        expect(component).toMatchSnapshot();
    });
});