import Friend from "./Friend";
import PropTypes from "prop-types";

function FriendList({ items }) {
  return (
    <ul className="friend-list">
      {items.map((item) => (
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
    })
  ),
};

export default FriendList;
