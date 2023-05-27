import styled from 'styled-components';

export const ListFriend = styled.ul`
 display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 45px;
  background: rgb(34,56,195);
  background: linear-gradient(180deg, rgba(34,56,195,1) 0%, rgba(253,240,45,1) 100%);
  border-radius: 20px;
`;

export const CardFriend = styled.li`
 display: flex;
  align-items: center;
  width: 400px;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;