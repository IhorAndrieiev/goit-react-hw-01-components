import Friend from './Friend';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
function FriendList({ items }) {
  return (
    <ul className={styles.friendList}>
      {items.map(item => (
        <Friend
          key={item.id}
          status={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
