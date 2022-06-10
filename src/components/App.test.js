import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('should render the correct text', () => {
    render(<App />);

    const contentText = screen.getByText(/i'm a react component/i);

    expect(contentText).toBeInTheDocument();
  });
});
