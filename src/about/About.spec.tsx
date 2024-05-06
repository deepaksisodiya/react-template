import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import About from './About.tsx';

describe('About', () => {
  it('Should render about page', () => {
    render(<About />);
    expect(screen.getByText('About Page')).toBeInTheDocument();
  });
});
