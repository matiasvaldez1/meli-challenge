import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { Input } from '@/components/ui/input';

describe('Input component', () => {
  it('To have all classes', () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector('input');
    
    expect(inputElement).not.toBeNull();
    expect(inputElement).toHaveClass('h-10');
    expect(inputElement).toHaveClass('w-full');
    expect(inputElement).toHaveClass('rounded-md');
  });

  it('To be rendered', () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector('input');

    expect(inputElement).toBeVisible()
  });
});
