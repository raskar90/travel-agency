import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} name='trip' image='image.jpg' cost='123' days={3} tags={['']} />);
    const renderedLink = component.find('Link').prop('to');
    expect(renderedLink).toEqual('/trip/' + expectedId);
  });

  it('if img has correct src and alt', () => {
    const expectedId = 'abc';
    const name = 'trip';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary id={expectedId} name={name} image={expectedImage} cost='123' days={3} tags={['']} />);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(name);
  });

  it('should render correctly props: name, cost and days', () => {
    const expectedId = 'abc';
    const name = 'trip';
    const image = 'image.jpg';
    const cost = '123';
    const days = 3;
    const component = shallow(<TripSummary id={expectedId} name={name} image={image} cost={cost} days={days} tags={['']} />);
    expect(component.find('.title').text()).toEqual(name);
    expect(component.find('span').at(0).text()).toEqual(days + ' days');
    expect(component.find('span').at(1).text()).toEqual('from ' + cost);
    console.log(component.debug());
  });

  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' name='trip' image='image.jpg' cost='123' days={3} tags={['first', 'second', 'third']} />);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary tags={[]} />)).toThrow();
  });

  it('should render tags correctly', () => {
    const component = shallow(<TripSummary id='abc' name='trip' image='image.jpg' cost='123' days={3} tags={['first', 'second', 'third']} />);

    expect(component.find('.tag').at(0).text()).toEqual('first');
    expect(component.find('.tag').at(1).text()).toEqual('second');
    expect(component.find('.tag').at(2).text()).toEqual('third');
  });

  it('should not render tagswhen array is not given', () => {
    const component = shallow(<TripSummary id='abc' name='trip' image='image.jpg' cost='123' days={3} tags={['']} />);

    expect(component.find('.tags')).toMatchObject({});
  });

});