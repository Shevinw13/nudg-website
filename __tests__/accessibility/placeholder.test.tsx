import { describe, it, expect } from 'vitest';

describe('Accessibility Tests Setup', () => {
  it('jest-axe is available', async () => {
    const { axe } = await import('jest-axe');
    expect(axe).toBeDefined();
  });
});
