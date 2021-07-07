import PropTypes from "prop-types";
import defaultImage from "./default.jpg";
const Friend = ({ status, avatar, name }) => {
  return (
    <li className="item">
      <span className="status">{status ? " " : " "}</span>
      <img
        className="avatar"
        src={avatar ?? defaultImage}
        alt="Аватар пользователя"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

Friend.protoTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friend;
