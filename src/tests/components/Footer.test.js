import React from 'react';
import {render} from '@testing-library/react';
import Footer from '../../main/components/Footer';
import { shallow } from 'enzyme';

describe('Test Footer component', () => {

    it('should have a fixed test', () => {
        
        const { getByTest } = render(<Footer />);
    });

    it('should have a footer div', () => {
        
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });

});