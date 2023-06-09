import PropTypes from 'prop-types';
import { Container, IsOnline, Image, Name, } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Container>
      <IsOnline isOnline={isOnline}></IsOnline>
      <Image src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Container>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
