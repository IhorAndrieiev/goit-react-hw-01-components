import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import styles from './FriendList.module.css';

const Friend = ({ status, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span className={status ? styles.statusOn : styles.statusOff}></span>
      <img
        className={styles.avatar}
        src={avatar ?? defaultImage}
        alt="Аватар пользователя"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

Friend.protoTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friend;
