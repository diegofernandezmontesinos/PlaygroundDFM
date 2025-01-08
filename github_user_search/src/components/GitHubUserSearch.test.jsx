import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserSearch from './GitHubUserSearch';

describe('UserSearch', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render the component with input and button', () => {
    render(<UserSearch />);
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('should fetch and display users when searching', async () => {
    const mockUsers = [
      { login: 'user1', avatar_url: 'https://via.placeholder.com/150', html_url: 'https://github.com/user1' },
      { login: 'user2', avatar_url: 'https://via.placeholder.com/150', html_url: 'https://github.com/user2' },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ items: mockUsers }),
      })
    );

    render(<UserSearch />);
    fireEvent.change(screen.getByPlaceholderText('Enter username'), { target: { value: 'user' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(screen.getByText('user1')).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText('user2')).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/search/users?q=user');
  });
});
