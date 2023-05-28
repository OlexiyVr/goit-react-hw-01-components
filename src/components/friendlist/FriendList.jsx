import PropTypes from 'prop-types';
import { FriendListItem } from './friendlistitem/FriendListItem';
import {
  ListFriend,
  CardFriend,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListFriend>
      {friends.map(friend => (
        <CardFriend key={friend.id}>
          <li>
            <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
          </li>
        </CardFriend>
      ))}
    </ListFriend>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};