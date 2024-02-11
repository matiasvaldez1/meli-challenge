import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { Label } from '@/components/ui/label';

describe('Label component', () => {
  it('Renders correctly', () => {
    const { container } = render(<Label />);
    const labelElement = container.querySelector('label');
    
    expect(labelElement).not.toBeNull();
    expect(labelElement).toHaveClass('text-sm');
    expect(labelElement).toHaveClass('font-medium');
    expect(labelElement).toHaveClass('leading-none');
  });

  it('Passes down children correctly', () => {
    const labelText = 'This is a label';
    const { getByText } = render(<Label>{labelText}</Label>);
    
    expect(getByText(labelText)).toBeInTheDocument();
  });
});
