import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../../main/components/Footer';

describe('Test Footer component', () => {

    it('should have a fixed text', () => {
        
        const { getByTestId } = render(<Footer />);
        const footerText = getByTestId('footer-text')

        expect (footerText.textContent).toBe('Star Wars 2020 All rights reserved. Copyright Level Up ')
    });


    it('should validate the Footer component', () => {
        
        const footer = renderer.create(<Footer />).toJSON();
        expect(footer).toMatchSnapshot();
    });

});