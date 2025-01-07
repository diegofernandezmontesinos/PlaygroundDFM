import { screen, render } from '@testing-library/react';
import { GitHubUserSearch } from './GitHubUserSearch';


describe ('GitHubUserSearch', () => {
  it('should render correctly', () => {
    render(<GitHubUserSearch />)
    expect(screen.getByText('GitHub User Search')).toBeInTheDocument();
  });

  it('should render an input with a button', () => {
    render(<GitHubUserSearch />)
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Search'})).toBeInTheDocument();
  })


});