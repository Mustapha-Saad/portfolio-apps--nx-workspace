import { render } from '@testing-library/react';

import SliderSection from './slider-section';

describe('SliderSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SliderSection />);
    expect(baseElement).toBeTruthy();
  });
});
