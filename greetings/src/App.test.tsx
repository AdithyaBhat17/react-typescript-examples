import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as enzyme from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App name='Adithya' />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the correct text when no enthusiasm level is given', () => {
  const app = enzyme.shallow(<App name='Adithya' />)
  expect(app.find('.greetings').text()).toEqual('Hello Adithya!')
}) 

it('throws when enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<App name='Adithya' enthusiasmLevel={0} />)
  }).toThrow()
})

it('throws when enthusiasm level is -1', () => {
  expect(() => {
    enzyme.shallow(<App name='Adithya' enthusiasmLevel={-1} />)
  }).toThrow()
})

it('updates name when input is changed', () => {
  const app = enzyme.shallow(<App name='Adithya' />)
  app.find('input').simulate('change', {
    target: {
      value: 'Sumanyu'
    }
  })
  expect(app.find('.greetings').text()).toEqual('Hello Sumanyu!')
})



