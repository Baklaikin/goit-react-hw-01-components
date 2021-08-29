import css from "components/SocialProfile/Profile/Profile.module.css";
import propTypes from "prop-types";

function Profile({
  avatar,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.label}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.label}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
};
