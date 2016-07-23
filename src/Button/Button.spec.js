import React from 'react';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';

import Button from './Button';


describe('<Button>Primer Button</Button>', () => {
  it('renders a default button', () => {
    const wrapper = shallow(<Button>Primer</Button>);
    expect(wrapper.find('.btn')).to.have.length(1);
  });

  it('renders a Primer button', () => {
    const wrapper = shallow(<Button className="btn-primary">Primer</Button>);
    expect(wrapper.find('.btn-primary')).to.have.length(1);
  });
});
