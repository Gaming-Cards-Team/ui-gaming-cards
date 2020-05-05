import React from 'react';
import renderer from 'react-test-renderer';
import CardDetails from '../CardDetails'; 
jest.mock('react-router', () => ({
    useParams: () => ({
      id: '001',
    }),
})); 

describe('Test CardDetails component', () => {

    it('should validate the component', () => {

        const productDetail  = renderer.create(<CardDetails />)
        expect(productDetail).toMatchSnapshot()
    });
});