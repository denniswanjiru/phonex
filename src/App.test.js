import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Row from './Row'

describe('<App />', () => {
  it('renders  <App /> components', () => {
    const snap = shallow(<App />);
    expect(snap).toMatchSnapshot();
  });
});

describe('<Row />', () => {
  it('renders  <Row /> components', () => {
    const snap = shallow(<Row className data={{ index: "Index", phone: 'Phone Numbers' }} onClick={() => {}} />);
    expect(snap).toMatchSnapshot();
  });
});