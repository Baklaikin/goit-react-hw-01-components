import css from "components/SocialProfile/ProfileCard.module.css";
import Profile from "components/SocialProfile/Profile";

function ProfileCard({ items }) {
  return (
    <Profile
      name={items.name}
      tag={items.tag}
      location={items.location}
      avatar={items.avatar}
      stats={items.stats}
    />
  );
}

export default ProfileCard;
