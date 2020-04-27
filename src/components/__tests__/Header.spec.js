import React from 'react';
import Header from '../Header';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Test Header component', () => {

    it('should validate the Header component', () => {
        
        const header = renderer.create(<Header />).toJSON();
        expect(header).toMatchSnapshot();
    });

    it('should have a logo image', () => {
        
        const { getByTestId } = render(<Header />);
        const logoImage = getByTestId('logo')

        expect(logoImage.src).toMatch('logo.png')
    });

});