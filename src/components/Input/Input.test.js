import { render } from '@testing-library/react';

import Input from './Input';

describe('<Input />', () => {
  it('should render Input', () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
