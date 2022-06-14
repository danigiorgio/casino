import { render } from '@testing-library/react';

import Avatar from './Avatar';

describe('<Avatar />', () => {
  it('should render Avatar', () => {
    const { container } = render(<Avatar />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
