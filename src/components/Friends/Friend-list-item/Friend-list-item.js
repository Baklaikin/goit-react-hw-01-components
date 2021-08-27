import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline, id }) {
  if (isOnline) {
    return (
      <li className={css.item} key={id} id={id}>
        <span className={`${css.status} ${css.active}`}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  }
  return (
    <li className={css.item} key={id} id={id}>
      <span className={css.status}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
