import React from 'react';
import App from '../main/App';
import { mount, shallow } from 'enzyme';
import Header from '../main/components/Header';
import Body from '../main/components/Body';
import Footer from '../main/components/Footer';

describe('Test App component', () => {

    it('should have Header, Body, Footer', () => {

        const app  = mount(<App />)
        expect(app.containsAllMatchingElements([<Header/>, <Body/>, <Footer/>])).toBe(true)
    });

    it('should validate the component', () => {

        const app  = shallow(<App />)
        expect(app).toMatchSnapshot()
    });
});