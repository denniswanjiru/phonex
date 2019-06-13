import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';
import Row from './Row'
import generateNumbers from './utils/generateNumbers';

describe('<App />', () => {
  it('renders  <App /> components', () => {
    const snap = mount(<App />);
    expect(snap.length).toEqual(1);
  });

  it('calls handleChange', () => {
    const wrapper = mount(<App />);
    const handleChangeSpy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.find('input[name="phone"]').simulate('change', {
      target: { name: 'phone', value: 7 }
    })
    expect(handleChangeSpy.mock.calls.length).toEqual(0);
  });

  it('calls handleChange', () => {
    const wrapper = mount(<App />);
    const generateNumbersSpy = jest.spyOn(wrapper.instance(), 'generateNumbers');
    wrapper.find('button').simulate('click')
    expect(generateNumbersSpy.mock.calls.length).toEqual(0);
  });

  it('Generates numbers correctly', () => {
    expect(generateNumbers(4)).toBeTruthy();
  });
});


describe('<Row />', () => {
  it('renders  <Row /> components', () => {
    const snap = mount(<Row className data={{ index: "Index", phone: 'Phone Numbers' }} onClick={() => {}} />);
    expect(snap.length).toEqual(1);
  });
});