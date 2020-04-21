import React from 'react';
import Body from '../../main/components/Body';
import { shallow } from 'enzyme';

describe('Test Body component', () => {

    it('should validate the component', () => {
        
        const component = shallow(<Body />);
        expect(component).toMatchSnapshot();
    });

});