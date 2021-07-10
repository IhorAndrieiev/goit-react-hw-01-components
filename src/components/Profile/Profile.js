import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar ?? defaultImage}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>
            {stats.views.toLocaleString('en-EN')}
          </span>
        </li>
        <li>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;

// export default function Profile({
//     name,
//     tag,
//     location,
//     avatar,
//     followers,
//     views,
//     likes }) {

//     return (<div className="profile">
//         <div className="description">
//             <img
//                 src={avatar}
//                 alt="Аватар пользователя"
//                 className="avatar"
//             />
//             <p className="name">{name}</p>
//             <p className="tag">@{tag}</p>
//             <p className="location">{location}</p>
//         </div>

//         <ul className="stats">
//             <li>
//                 <span className="label">Followers </span>
//                 <span className="quantity">{followers}</span>
//             </li>
//             <li>
//                 <span className="label">Views </span>
//                 <span className="quantity">{views}</span>
//             </li>
//             <li>
//                 <span className="label">Likes </span>
//                 <span className="quantity">{likes}</span>
//             </li>
//         </ul>
//     </div>);
// }