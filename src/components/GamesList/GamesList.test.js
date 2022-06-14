import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import GamesList from './GamesList';

describe('<GamesList />', () => {
  const queryClient = new QueryClient();

  it('should render No Results Found message when there is no data', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GamesList />
        </BrowserRouter>
      </QueryClientProvider>,
    );
    const noResultsMessage = screen.getByText(/No results found/i);

    expect(noResultsMessage).toBeInTheDocument();
  });
});
