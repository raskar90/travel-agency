import React from 'react';
import {shallow} from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText='Lorem ipsum' imageSrc='Lorem ipsum' />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  
  //warunki brzegowe (edge cases), czyli jak zachowa się komponent, kiedy nie podamy propsa (lub podamy błędną wartość), a jak przy jego poprawnej wartości.
  it('should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toThrow();
  });

  //czy tytuł przekazany w propsie titleText faktycznie jest wyświetlany na stronie

  it('should render correct title and image', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);
  
    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('.image').prop('src')).toEqual(expectedImage);
  });

  //czy nasz wyrenderowany wrapper komponentu otrzymuje poprawne klasy, w zależności od propsa variant.

  it('renders correct classNames', () => {
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('small')).toBe(true);
    expect(component.hasClass('dummy')).toBe(true);
  });
});
