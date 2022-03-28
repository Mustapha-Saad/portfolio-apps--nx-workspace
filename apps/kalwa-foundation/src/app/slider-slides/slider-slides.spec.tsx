import { render } from '@testing-library/react';

import SliderSlides from './slider-slides';

describe('SliderSlides', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SliderSlides />);
    expect(baseElement).toBeTruthy();
  });
});
