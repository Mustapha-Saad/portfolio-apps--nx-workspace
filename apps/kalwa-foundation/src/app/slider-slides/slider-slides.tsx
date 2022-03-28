import styles from './slider-slides.module.scss';

/* eslint-disable-next-line */
export interface SliderSlidesProps {}

export function SliderSlides(props: SliderSlidesProps) {
  return (
    <div id="main-slider" className="nivoSlider">
      <img src="img/slider-1.jpg" alt="" title="#slider-caption-1" />
      <img src="img/slider-2.jpg" alt="" title="#slider-caption-2" />
      <img src="img/slider-3.jpg" alt="" title="#slider-caption-3" />
    </div>
  );
}

export default SliderSlides;
