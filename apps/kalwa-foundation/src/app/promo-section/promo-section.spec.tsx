import { render } from '@testing-library/react';

import PromoSection from './promo-section';

describe('PromoSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PromoSection />);
    expect(baseElement).toBeTruthy();
  });
});
