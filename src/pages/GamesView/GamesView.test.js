import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import GamesView from './GamesView';

describe('<GamesView />', () => {
  const queryClient = new QueryClient();

  it('should render the correct content in games view', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GamesView />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    const avatar = screen.getByRole('img');
    const logOutBtn = screen.getByRole('button');
    const categoriesTitle = screen.getByText(/categories/i);
    const gamesList = screen.getByRole('article');
    const categoriesList = screen.getByRole('complementary');

    expect(avatar).toBeInTheDocument();
    expect(logOutBtn).toBeInTheDocument();
    expect(categoriesTitle).toBeInTheDocument();
    expect(gamesList).toBeInTheDocument();
    expect(categoriesList).toBeInTheDocument();
  });
});
