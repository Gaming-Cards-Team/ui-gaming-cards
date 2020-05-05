import React from 'react';
import CardDetailsBody from '../CardDetailsBody';

import renderer from 'react-test-renderer';

describe('Test Product Detail Body component', () => {
    it('should validate the component', () => {
        const productDetailBody = renderer.create(<CardDetailsBody id='001' />).toJSON();

        expect(productDetailBody).toMatchSnapshot();
    });
});