import React from 'react';
import CardTextFields from '../CardTextFields';
import renderer from 'react-test-renderer';

describe('Test Product Text component', () => {
    it('should validate the component', () => {
        const productDetail = renderer.create(<CardTextFields />).toJSON();

        expect(productDetail).toMatchSnapshot();
    });
});