import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
function StatisticItem({ label, percentage }) {
  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: `rgba( ${random()} , ${random()} , ${random()} )`,
      }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

function random() {
  return Math.floor(Math.random() * 256);
}

StatisticItem.protoTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
