import styles from './about-us.module.scss';

/* eslint-disable-next-line */
export interface AboutUsProps {}

export function AboutUs(props: AboutUsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AboutUs!</h1>
    </div>
  );
}

export default AboutUs;
