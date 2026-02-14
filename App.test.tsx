import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Discover section by default', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Discover' })).toBeInTheDocument();
    expect(screen.getByText('Kyaw Htet | AI/ML Engineer & Product Builder')).toBeInTheDocument();
  });
});
