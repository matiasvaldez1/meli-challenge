import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { Textarea } from '@/components/ui/textarea';

describe('Textarea component', () => {
  it('Renders correctly', () => {
    const { container } = render(<Textarea />);
    const textareaElement = container.querySelector('textarea');
    
    expect(textareaElement).not.toBeNull();
    expect(textareaElement).toHaveClass('min-h-[80px]');
    expect(textareaElement).toHaveClass('w-full');
    expect(textareaElement).toHaveClass('rounded-md');
  });
});
