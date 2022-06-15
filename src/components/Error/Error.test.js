import { render } from '@testing-library/react';

import Error from './Error';

describe('<Error />', () => {
  it('should render Error', () => {
    const { container } = render(<Error />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
