import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import s from './Friend.module.css';

const Friend = ({ status, avatar, name }) => {
  return (
    <li className={s.item}>
      <span className={status ? s.statusOn : s.statusOff}></span>
      <img
        className={s.avatar}
        src={avatar ?? defaultImage}
        alt="Аватар пользователя"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
};

Friend.protoTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friend;
