import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('Test Footer component', () => {

    it('should have a fixed text', () => {
        const { getByTestId } = render(<Footer />);
        const footerText = getByTestId('footer-text')

        expect (footerText.textContent).toBe('Copyright Star Wars and all associated names and/or images are copyright Lucasfilm Ltd.')
    });

    it('should validate the component', () => { 
        const footer = renderer.create(<Footer />).toJSON();
        
        expect(footer).toMatchSnapshot();
    });

});