import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <li key={friend.id} class={css.item}>
          {friend.isOnline ? (
            <span className={css.status + ' ' + css.online}></span>
          ) : (
            <span className={css.status + ' ' + css.offline}></span>
          )}
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
