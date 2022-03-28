import SliderCaption from '../slider-caption/slider-caption';
import SliderSlides from '../slider-slides/slider-slides';
import styles from './slider-section.module.scss';

/* eslint-disable-next-line */
export interface SliderSectionProps {}

export function SliderSection(props: SliderSectionProps) {
  return (
    <section className="slider-section">
      <div className="slider-wrapper">
        <SliderSlides></SliderSlides>

        {/* LOOP OF ALL SLIDES */}
        <SliderCaption></SliderCaption>
        {/* LOOP OF ALL SLIDES */}
      </div>
    </section>
  );
}

export default SliderSection;
