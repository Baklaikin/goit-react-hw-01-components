import FriendListItem from "components/Friends/Friend-list-item/Friend-list-item";
import css from "./FriendList.module.css";

function FriendList({ items }) {
  return (
    <ul className={css.friendList}>
      {items.map((item) => (
        <FriendListItem
          key={item.id}
          url={item.avatar}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;
