import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../Main'; 

describe('Test Main component', () => {

    it('should validate the component', () => {

        const main  = renderer.create(<Main />)
        expect(main).toMatchSnapshot()
    });
});