import React from 'react';
import renderer from 'react-test-renderer';
import ProductDetail from '../ProductDetail'; 

describe('Test ProductDetail component', () => {

    it('should validate the component', () => {

        const productDetail  = renderer.create(<ProductDetail />)
        expect(productDetail).toMatchSnapshot()
    });
});