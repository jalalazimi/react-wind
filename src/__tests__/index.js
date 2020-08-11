import React, { createRef, PureComponent } from 'react';
import { render } from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import ReactTestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Wind from '..';

describe('ReactWind', () => {
  it('should render an empty element', () => {
    const _render = ReactTestRenderer.create(
      <Wind/>
    );
    expect(_render.toJSON()).toBe(null);
  });

  it('should render an empty P element', () => {
    const root = ReactTestRenderer.create(
      <Wind as="p">p</Wind>
    );
    console.log(root.toJSON())
    // expect(result.type).toBe('p')
  });
})
