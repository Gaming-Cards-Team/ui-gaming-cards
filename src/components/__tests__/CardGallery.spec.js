import React from 'react';
import CardGallery from '../CardGallery';

import renderer from 'react-test-renderer';

describe('Test CardGallery component', () => {

    it('should validate the component', () => {
        
        const cardGallery = renderer.create(<CardGallery />).toJSON();
        expect(cardGallery).toMatchSnapshot();
    });
});