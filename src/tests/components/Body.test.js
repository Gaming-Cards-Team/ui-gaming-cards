import React from 'react';
import Body from '../../main/components/Body';

import renderer from 'react-test-renderer';

describe('Test Body component', () => {

    it('should validate the Body component', () => {
        
        const body = renderer.create(<Body />).toJSON();
        expect(body).toMatchSnapshot();
    });



});