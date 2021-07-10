import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles.tableItem}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;