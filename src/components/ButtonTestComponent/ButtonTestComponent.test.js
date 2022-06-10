import React from 'react';
import { render } from '@testing-library/react';

import ButtonTestComponent from './ButtonTestComponent';

describe('<ButtonTestComponent />', () => {
  it('should render ButtonTestComponent', () => {
    const { container } = render(<ButtonTestComponent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
