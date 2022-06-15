import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Logo from './Logo';

describe('<Logo />', () => {
  it('should render Logo', () => {
    const { container } = render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
