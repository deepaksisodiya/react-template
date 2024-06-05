import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

vi.mock('./assets/react.svg', () => {
  return {
    default: () => <div>React Icon</div>
  };
});

const renderApp = () => {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
};

async function waitForDelay(milliseconds: number) {
  await new Promise(resolve => setTimeout(resolve, milliseconds));
}

describe('App', () => {
  it('should display the navigation', async () => {
    await renderApp();
    expect(screen.getByText('React Template')).toBeInTheDocument();
  });

  it('should display the API endpoint', async () => {
    await renderApp();
    expect(screen.getByText(`API End Point: ${JSON.stringify(import.meta.env.VITE_APP_API_URL)}`)).toBeInTheDocument();
  });

  it('should show the todos and todos count', async () => {
    await renderApp();
    await waitForDelay(2000);
    expect(screen.getByText('Total Todos: 200')).toBeInTheDocument();
    expect(screen.getByText('Do something nice for someone you care about - Completed: No')).toBeInTheDocument();
  });
});
