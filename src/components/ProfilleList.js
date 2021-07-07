import Profile from "./Profile";
//import PropTypes from "prop-types";
function ProfileList({ user }) {
  return (
    <Profile
      key={user.name}
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      //stats={user.stats}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}

// ProfileList.propTypes = {
//   user: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };
export default ProfileList;
