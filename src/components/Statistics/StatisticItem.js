import PropTypes from 'prop-types';
import s from './Statistics.module.css';
function StatisticItem({ label, percentage }) {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: `rgba( ${random()} , ${random()} , ${random()} )`,
      }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
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
