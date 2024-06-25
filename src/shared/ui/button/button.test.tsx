import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button component', () => {
  test('Button with text', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test("Button with className", () => {
    render(<Button className='className'>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('className');
  })
})
