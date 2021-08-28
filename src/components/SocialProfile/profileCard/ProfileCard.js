import css from "components/SocialProfile/profileCard/ProfileCard.module.css";
import Profile from "components/SocialProfile/Profile/Profile";

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
