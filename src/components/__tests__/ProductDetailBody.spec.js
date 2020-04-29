import React from 'react';
import ProductDetailBody from '../ProductDetailBody';

import renderer from 'react-test-renderer';

describe('Test Product Detail Body component', () => {
    it('should validate the component', () => {
        const productDetailBody = renderer.create(<ProductDetailBody />).toJSON();

        expect(productDetailBody).toMatchSnapshot();
    });
});