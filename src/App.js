import FriendList from "components/Friends/Friend-list/Friend-list.js";
// import Profile from "components/SocialProfile/Profile";
import ProfileCard from "components/SocialProfile/ProfileCard.js";
import friends from "./friends.json";
import user from "./user.json";
import "./App.css";
console.log(user);

function App() {
  return (
    <>
      <FriendList items={friends} />
      <ProfileCard items={user} />
    </>
  );
}

export default App;
