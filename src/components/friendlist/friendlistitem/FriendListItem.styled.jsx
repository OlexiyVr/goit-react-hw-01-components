import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const IsOnline = styled.span`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Image = styled.img`
  display: block;
  width: 95px;

  background-color: #faff95;
  border: 0.5px solid #111111;
  border-radius: 2px;
`;

export const Name = styled.p`
  font-size: 50px;
`;