import React from 'react';
import MainBody from '../MainBody';

import renderer from 'react-test-renderer';

describe('Test Main Body component', () => {
    it('should validate the component', () => {
        const mainBody = renderer.create(<MainBody />).toJSON();

        expect(mainBody).toMatchSnapshot();
    });
});