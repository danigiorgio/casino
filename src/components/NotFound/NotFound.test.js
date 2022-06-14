import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should render a heading with the text of Not Found', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    const notFoundMsg = screen.getByRole('heading');
    expect(notFoundMsg).toBeInTheDocument();
    expect(notFoundMsg).toHaveTextContent('Not Found');
  });

  it('should render a link element that wraps a button with the text of go home', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    const link = screen.getByRole('link');
    const button = screen.getByRole('button');
    expect(link).toBeInTheDocument();
    expect(button).toHaveTextContent('Go Home');
  });
});
