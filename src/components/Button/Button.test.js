import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  it('should render Button', () => {
    const { container } = render(<Button />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
