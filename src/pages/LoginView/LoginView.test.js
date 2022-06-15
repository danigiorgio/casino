import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import LoginView from './LoginView';

describe('<LoginView />', () => {
  const queryClient = new QueryClient();

  it('should render the correct content in login view', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginView />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    const usernameInput = screen.getByPlaceholderText(/Username/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const loginBtn = screen.getByRole('button', { name: /Log In/i });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it('should display an error message when no username or password is entered', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginView />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    const loginBtn = screen.getByRole('button', { name: /Log In/i });

    fireEvent.click(loginBtn);

    const errorMessage = screen.getByText(/Please fill in all fields./i);
    expect(errorMessage).toBeInTheDocument();
  });
});
