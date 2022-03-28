import styles from './slider-caption.module.scss';

/* eslint-disable-next-line */
export interface SliderCaptionProps {}

export function SliderCaption(props: SliderCaptionProps) {
  return (
    <div id="slider-caption-1" className="nivo-html-caption slider-caption">
      <div className="display-table">
        <div className="table-cell">
          <div className="container">
            <div className="slider-text">
              <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
              <h1 className="wow cssanimation leFadeInRight sequence">
                Better Life for People
              </h1>
              <p className="wow cssanimation fadeInTop" data-wow-delay="1s">
                Help today because tomorrow you may be the one who needs
                helping! <br />
                Forget what you can get and see what you can give.
              </p>
              <a
                href="#"
                className="default-btn wow cssanimation fadeInBottom"
                data-wow-delay="0.8s"
              >
                Join With Us
              </a>
              <a
                href="#"
                className="default-btn wow cssanimation fadeInBottom"
                data-wow-delay="0.8s"
              >
                Donet Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCaption;
