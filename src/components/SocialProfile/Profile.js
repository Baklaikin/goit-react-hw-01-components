import css from "components/SocialProfile/Profile.module.css";

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt={name} className={css.avatar} />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{name}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{name}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{name}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
