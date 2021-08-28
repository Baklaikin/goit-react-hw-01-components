import FriendList from "components/Friends/Friend-list/Friend-list";
import ProfileCard from "components/SocialProfile/profileCard/ProfileCard";
import friends from "./friends.json";
import user from "./user.json";
import "./App.css";

function App() {
  return (
    <>
      <FriendList items={friends} />
      <ProfileCard items={user} />
    </>
  );
}

export default App;
