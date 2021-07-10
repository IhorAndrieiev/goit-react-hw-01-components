import PropTypes from 'prop-types';
import styles from './Section.module.css';
function Section({ title, children }) {
  return (
    <div className={styles.title}>
      {title && <h2>{title}</h2>} {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
