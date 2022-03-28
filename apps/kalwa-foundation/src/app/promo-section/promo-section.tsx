import styles from './promo-section.module.scss';

/* eslint-disable-next-line */
export interface PromoSectionProps {}

export function PromoSection(props: PromoSectionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PromoSection!</h1>
    </div>
  );
}

export default PromoSection;
