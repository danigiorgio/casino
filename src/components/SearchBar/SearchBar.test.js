import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  it('should render an input element', () => {
    render(<SearchBar />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
