import React from 'react';
import ProductDetail from '../ProductDetail';

import renderer from 'react-test-renderer';

describe('Test Product Detail component', () => {
    it('should validate the component', () => {
        const productDetail = renderer.create(<ProductDetail />).toJSON();

        expect(productDetail).toMatchSnapshot();
    });
});