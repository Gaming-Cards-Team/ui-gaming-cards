import React from 'react';
import Header from '../../main/components/Header';
import { shallow } from 'enzyme';

describe('Test Header component', () => {

    it('should have a header div', () => {
        
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });

});