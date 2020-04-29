import React from 'react';
import Banner from '../Banner';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Test Banner component', () => {

    it('should validate the component', () => {
        
        const banner = renderer.create(<Banner />).toJSON();
        expect(banner).toMatchSnapshot();
    });

    it('should have a image', () => {
        
        const { getByTestId } = render(<Banner />);
        const imageBanner = getByTestId('banner')

        expect(imageBanner.src).toMatch('banner.png')
    });

});