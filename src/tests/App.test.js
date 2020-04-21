import React from 'react';
import renderer from 'react-test-renderer';
import App from '../main/App';

describe('Test App component', () => {

    it('should validate the component', () => {

        const app  = renderer.create(<App />)
        expect(app).toMatchSnapshot()
    });
});