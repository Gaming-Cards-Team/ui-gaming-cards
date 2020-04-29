import React from 'react';
import ProductText from '../ProductText';

import renderer from 'react-test-renderer';

describe('Test Product Text component', () => {
    it('should validate the component', () => {
        const productDetail = renderer.create(<ProductText />).toJSON();

        expect(productDetail).toMatchSnapshot();
    });
});