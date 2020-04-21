import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../../main/components/Footer';

describe('Test Footer component', () => {

    it('should have a fixed text', () => {
        
        const { getByTest } = render(<Footer />);
    });

    it('should validate the Footer component', () => {
        
        const footer = renderer.create(<Footer />).toJSON();
        expect(footer).toMatchSnapshot();
    });

});