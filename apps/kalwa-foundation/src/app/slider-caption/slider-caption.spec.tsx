import { render } from '@testing-library/react';

import SliderCaption from './slider-caption';

describe('SliderCaption', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SliderCaption />);
    expect(baseElement).toBeTruthy();
  });
});
