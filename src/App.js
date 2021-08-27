import FriendList from "components/Friends/Friend-list/Friend-list.js";
import friends from "./friends.json";
import "./App.css";

function App() {
  return <FriendList items={friends} />;
}

export default App;
